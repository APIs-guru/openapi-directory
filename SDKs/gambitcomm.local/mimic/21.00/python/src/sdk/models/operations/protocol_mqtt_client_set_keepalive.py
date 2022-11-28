from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientSetKeepalivePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    alive_time: int = field(metadata={'path_param': { 'field_name': 'aliveTime', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientSetKeepaliveRequest:
    path_params: ProtocolMqttClientSetKeepalivePathParams = field()
    

@dataclass
class ProtocolMqttClientSetKeepaliveResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_mqtt_client_set_keepalive_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
