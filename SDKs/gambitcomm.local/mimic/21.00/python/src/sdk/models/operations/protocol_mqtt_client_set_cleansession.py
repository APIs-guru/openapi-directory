from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientSetCleansessionPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    clean_or_not: int = field(default=None, metadata={'path_param': { 'field_name': 'cleanOrNot', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientSetCleansessionRequest:
    path_params: ProtocolMqttClientSetCleansessionPathParams = field(default=None)
    

@dataclass
class ProtocolMqttClientSetCleansessionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_mqtt_client_set_cleansession_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
