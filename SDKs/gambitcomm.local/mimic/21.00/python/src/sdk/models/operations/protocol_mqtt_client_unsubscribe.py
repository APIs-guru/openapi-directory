from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolMqttClientUnsubscribePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    sub_num: int = field(default=None, metadata={'path_param': { 'field_name': 'subNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientUnsubscribeRequest:
    path_params: ProtocolMqttClientUnsubscribePathParams = field(default=None)
    

@dataclass
class ProtocolMqttClientUnsubscribeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_mqtt_client_unsubscribe_200_application_json_string: Optional[str] = field(default=None)
    
