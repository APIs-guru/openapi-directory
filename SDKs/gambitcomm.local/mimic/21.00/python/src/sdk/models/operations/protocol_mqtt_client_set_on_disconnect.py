from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientSetOnDisconnectPathParams:
    action: str = field(metadata={'path_param': { 'field_name': 'action', 'style': 'simple', 'explode': False }})
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientSetOnDisconnectRequest:
    path_params: ProtocolMqttClientSetOnDisconnectPathParams = field()
    

@dataclass
class ProtocolMqttClientSetOnDisconnectResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_mqtt_client_set_on_disconnect_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
