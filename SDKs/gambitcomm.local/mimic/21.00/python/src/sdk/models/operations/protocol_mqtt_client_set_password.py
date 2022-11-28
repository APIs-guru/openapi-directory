from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientSetPasswordPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    password: str = field(metadata={'path_param': { 'field_name': 'password', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientSetPasswordRequest:
    path_params: ProtocolMqttClientSetPasswordPathParams = field()
    

@dataclass
class ProtocolMqttClientSetPasswordResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_mqtt_client_set_password_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
