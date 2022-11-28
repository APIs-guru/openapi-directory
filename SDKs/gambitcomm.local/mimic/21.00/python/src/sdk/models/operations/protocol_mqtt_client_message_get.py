from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientMessageGetPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    attr: str = field(metadata={'path_param': { 'field_name': 'attr', 'style': 'simple', 'explode': False }})
    msg_num: int = field(metadata={'path_param': { 'field_name': 'msgNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientMessageGetRequest:
    path_params: ProtocolMqttClientMessageGetPathParams = field()
    

@dataclass
class ProtocolMqttClientMessageGetResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_mqtt_client_message_get_200_application_json_strings: Optional[List[str]] = field(default=None)
    
