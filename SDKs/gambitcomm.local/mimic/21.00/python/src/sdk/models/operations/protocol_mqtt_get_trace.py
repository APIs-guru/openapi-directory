from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolMqttGetTracePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttGetTraceRequest:
    path_params: ProtocolMqttGetTracePathParams = field()
    

@dataclass
class ProtocolMqttGetTraceResponse:
    content_type: str = field()
    status_code: int = field()
    config_mqtt: Optional[shared.ConfigMqtt] = field(default=None)
    
