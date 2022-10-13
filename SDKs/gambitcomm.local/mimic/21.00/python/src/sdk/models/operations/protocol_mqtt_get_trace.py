from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProtocolMqttGetTracePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttGetTraceRequest:
    path_params: ProtocolMqttGetTracePathParams = field(default=None)
    

@dataclass
class ProtocolMqttGetTraceResponse:
    config_mqtt: Optional[shared.ConfigMqtt] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
