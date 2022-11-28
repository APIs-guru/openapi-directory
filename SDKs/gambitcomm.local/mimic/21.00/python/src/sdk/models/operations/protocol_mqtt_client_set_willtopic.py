from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientSetWilltopicPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    topic: str = field(metadata={'path_param': { 'field_name': 'topic', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientSetWilltopicRequest:
    path_params: ProtocolMqttClientSetWilltopicPathParams = field()
    

@dataclass
class ProtocolMqttClientSetWilltopicResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_mqtt_client_set_willtopic_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
