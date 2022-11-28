from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientRuntimeAbortPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientRuntimeAbortRequest:
    path_params: ProtocolMqttClientRuntimeAbortPathParams = field()
    

@dataclass
class ProtocolMqttClientRuntimeAbortResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_mqtt_client_runtime_abort_200_application_json_strings: Optional[List[str]] = field(default=None)
    
