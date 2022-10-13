from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientSetKeepalivePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    alive_time: int = field(default=None, metadata={'path_param': { 'field_name': 'aliveTime', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientSetKeepaliveRequest:
    path_params: ProtocolMqttClientSetKeepalivePathParams = field(default=None)
    

@dataclass
class ProtocolMqttClientSetKeepaliveResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_mqtt_client_set_keepalive_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
