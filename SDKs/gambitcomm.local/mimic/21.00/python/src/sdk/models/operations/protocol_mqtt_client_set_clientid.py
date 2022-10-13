from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientSetClientidPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clientID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientSetClientidRequest:
    path_params: ProtocolMqttClientSetClientidPathParams = field(default=None)
    

@dataclass
class ProtocolMqttClientSetClientidResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_mqtt_client_set_clientid_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
