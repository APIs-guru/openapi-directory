from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientMessageCardPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientMessageCardRequest:
    path_params: ProtocolMqttClientMessageCardPathParams = field()
    

@dataclass
class ProtocolMqttClientMessageCardResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_mqtt_client_message_card_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
