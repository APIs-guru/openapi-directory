from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientSetUsernamePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientSetUsernameRequest:
    path_params: ProtocolMqttClientSetUsernamePathParams = field(default=None)
    

@dataclass
class ProtocolMqttClientSetUsernameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_mqtt_client_set_username_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
