from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientSetPasswordPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    password: str = field(default=None, metadata={'path_param': { 'field_name': 'password', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientSetPasswordRequest:
    path_params: ProtocolMqttClientSetPasswordPathParams = field(default=None)
    

@dataclass
class ProtocolMqttClientSetPasswordResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_mqtt_client_set_password_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
