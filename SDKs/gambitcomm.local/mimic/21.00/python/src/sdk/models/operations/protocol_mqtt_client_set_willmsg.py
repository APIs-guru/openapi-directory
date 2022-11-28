from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientSetWillmsgPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    msg: str = field(metadata={'path_param': { 'field_name': 'msg', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientSetWillmsgRequest:
    path_params: ProtocolMqttClientSetWillmsgPathParams = field()
    

@dataclass
class ProtocolMqttClientSetWillmsgResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_mqtt_client_set_willmsg_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
