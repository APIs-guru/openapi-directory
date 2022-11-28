from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientSetPortPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: str = field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientSetPortRequest:
    path_params: ProtocolMqttClientSetPortPathParams = field()
    

@dataclass
class ProtocolMqttClientSetPortResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_mqtt_client_set_port_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
