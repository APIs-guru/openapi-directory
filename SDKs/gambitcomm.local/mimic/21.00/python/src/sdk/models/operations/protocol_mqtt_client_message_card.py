from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientMessageCardPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientMessageCardRequest:
    path_params: ProtocolMqttClientMessageCardPathParams = field(default=None)
    

@dataclass
class ProtocolMqttClientMessageCardResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_mqtt_client_message_card_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
