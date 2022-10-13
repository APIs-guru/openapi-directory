from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolMqttClientSetBrokerPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    broker_addr: str = field(default=None, metadata={'path_param': { 'field_name': 'brokerAddr', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolMqttClientSetBrokerRequest:
    path_params: ProtocolMqttClientSetBrokerPathParams = field(default=None)
    

@dataclass
class ProtocolMqttClientSetBrokerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_mqtt_client_set_broker_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
