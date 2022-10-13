from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ProtocolMqttGetArgsPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttGetArgsRequest:
    path_params: ProtocolMqttGetArgsPathParams = field(default=None)
    

@dataclass
class ProtocolMqttGetArgsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_mqtt_get_args_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
