from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolMqttClientResubscribePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    sub_num: int = field(default=None, metadata={'path_param': { 'field_name': 'subNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientResubscribeRequest:
    path_params: ProtocolMqttClientResubscribePathParams = field(default=None)
    

@dataclass
class ProtocolMqttClientResubscribeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_mqtt_client_resubscribe_200_application_json_string: Optional[str] = field(default=None)
    
