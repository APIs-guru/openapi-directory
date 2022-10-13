from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientSubscribeGetPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    attr: str = field(default=None, metadata={'path_param': { 'field_name': 'attr', 'style': 'simple', 'explode': False }})
    sub_num: int = field(default=None, metadata={'path_param': { 'field_name': 'subNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientSubscribeGetRequest:
    path_params: ProtocolMqttClientSubscribeGetPathParams = field(default=None)
    

@dataclass
class ProtocolMqttClientSubscribeGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_mqtt_client_subscribe_get_200_application_json_strings: Optional[List[str]] = field(default=None)
    
