from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientSetWillmsgPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    msg: str = field(default=None, metadata={'path_param': { 'field_name': 'msg', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientSetWillmsgRequest:
    path_params: ProtocolMqttClientSetWillmsgPathParams = field(default=None)
    

@dataclass
class ProtocolMqttClientSetWillmsgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_mqtt_client_set_willmsg_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
