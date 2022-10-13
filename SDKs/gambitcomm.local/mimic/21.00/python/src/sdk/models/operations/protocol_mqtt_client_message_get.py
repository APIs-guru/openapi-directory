from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientMessageGetPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    attr: str = field(default=None, metadata={'path_param': { 'field_name': 'attr', 'style': 'simple', 'explode': False }})
    msg_num: int = field(default=None, metadata={'path_param': { 'field_name': 'msgNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientMessageGetRequest:
    path_params: ProtocolMqttClientMessageGetPathParams = field(default=None)
    

@dataclass
class ProtocolMqttClientMessageGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_mqtt_client_message_get_200_application_json_strings: Optional[List[str]] = field(default=None)
    
