from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientSetOnDisconnectPathParams:
    action: str = field(default=None, metadata={'path_param': { 'field_name': 'action', 'style': 'simple', 'explode': False }})
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientSetOnDisconnectRequest:
    path_params: ProtocolMqttClientSetOnDisconnectPathParams = field(default=None)
    

@dataclass
class ProtocolMqttClientSetOnDisconnectResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_mqtt_client_set_on_disconnect_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
