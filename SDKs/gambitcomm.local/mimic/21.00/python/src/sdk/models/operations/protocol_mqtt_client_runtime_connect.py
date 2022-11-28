from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientRuntimeConnectPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientRuntimeConnectRequest:
    path_params: ProtocolMqttClientRuntimeConnectPathParams = field()
    

@dataclass
class ProtocolMqttClientRuntimeConnectResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_mqtt_client_runtime_connect_200_application_json_strings: Optional[List[str]] = field(default=None)
    
