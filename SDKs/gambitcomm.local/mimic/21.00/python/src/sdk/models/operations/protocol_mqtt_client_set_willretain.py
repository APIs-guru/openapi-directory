from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientSetWillretainPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    retain: str = field(default=None, metadata={'path_param': { 'field_name': 'retain', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientSetWillretainRequest:
    path_params: ProtocolMqttClientSetWillretainPathParams = field(default=None)
    

@dataclass
class ProtocolMqttClientSetWillretainResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_mqtt_client_set_willretain_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
