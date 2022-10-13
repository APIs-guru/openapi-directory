from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientGetProtstatePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientGetProtstateRequest:
    path_params: ProtocolMqttClientGetProtstatePathParams = field(default=None)
    

@dataclass
class ProtocolMqttClientGetProtstateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_mqtt_client_get_protstate_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
