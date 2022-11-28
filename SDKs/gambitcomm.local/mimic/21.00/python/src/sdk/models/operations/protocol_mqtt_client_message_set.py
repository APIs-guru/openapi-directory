from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientMessageSetPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    attr: str = field(metadata={'path_param': { 'field_name': 'attr', 'style': 'simple', 'explode': False }})
    msg_num: int = field(metadata={'path_param': { 'field_name': 'msgNum', 'style': 'simple', 'explode': False }})
    value: str = field(metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientMessageSetRequest:
    path_params: ProtocolMqttClientMessageSetPathParams = field()
    

@dataclass
class ProtocolMqttClientMessageSetResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_mqtt_client_message_set_200_application_json_strings: Optional[List[str]] = field(default=None)
    
