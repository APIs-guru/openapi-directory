from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientSubscribeSetPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    attr: str = field(default=None, metadata={'path_param': { 'field_name': 'attr', 'style': 'simple', 'explode': False }})
    sub_num: int = field(default=None, metadata={'path_param': { 'field_name': 'subNum', 'style': 'simple', 'explode': False }})
    value: str = field(default=None, metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientSubscribeSetRequest:
    path_params: ProtocolMqttClientSubscribeSetPathParams = field(default=None)
    

@dataclass
class ProtocolMqttClientSubscribeSetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_mqtt_client_subscribe_set_200_application_json_strings: Optional[List[str]] = field(default=None)
    
