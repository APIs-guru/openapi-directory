from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientSetWilltopicPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    topic: str = field(default=None, metadata={'path_param': { 'field_name': 'topic', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientSetWilltopicRequest:
    path_params: ProtocolMqttClientSetWilltopicPathParams = field(default=None)
    

@dataclass
class ProtocolMqttClientSetWilltopicResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_mqtt_client_set_willtopic_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
