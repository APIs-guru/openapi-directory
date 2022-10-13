from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientSetPortPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: str = field(default=None, metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientSetPortRequest:
    path_params: ProtocolMqttClientSetPortPathParams = field(default=None)
    

@dataclass
class ProtocolMqttClientSetPortResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_mqtt_client_set_port_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
