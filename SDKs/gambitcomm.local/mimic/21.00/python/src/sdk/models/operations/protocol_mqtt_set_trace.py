from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolMqttSetTracePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    enable_or_not: str = field(default=None, metadata={'path_param': { 'field_name': 'enableOrNot', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttSetTraceRequest:
    path_params: ProtocolMqttSetTracePathParams = field(default=None)
    

@dataclass
class ProtocolMqttSetTraceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_mqtt_set_trace_200_application_json_string: Optional[str] = field(default=None)
    
