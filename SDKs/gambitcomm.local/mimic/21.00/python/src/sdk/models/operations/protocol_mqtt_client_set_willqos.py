from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientSetWillqosPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    qos: str = field(default=None, metadata={'path_param': { 'field_name': 'qos', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientSetWillqosRequest:
    path_params: ProtocolMqttClientSetWillqosPathParams = field(default=None)
    

@dataclass
class ProtocolMqttClientSetWillqosResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_mqtt_client_set_willqos_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
