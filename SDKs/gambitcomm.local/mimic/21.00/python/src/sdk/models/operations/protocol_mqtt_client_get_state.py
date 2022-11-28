from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientGetStatePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientGetStateRequest:
    path_params: ProtocolMqttClientGetStatePathParams = field()
    

@dataclass
class ProtocolMqttClientGetStateResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_mqtt_client_get_state_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
