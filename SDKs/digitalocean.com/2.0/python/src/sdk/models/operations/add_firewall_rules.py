from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AddFirewallRulesPathParams:
    firewall_id: str = field(default=None, metadata={'path_param': { 'field_name': 'firewall_id', 'style': 'simple', 'explode': False }})
    
class AddFirewallRulesRequestBodyInboundRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"


@dataclass_json
@dataclass
class AddFirewallRulesRequestBodyInboundRulesSources:
    addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addresses' }})
    droplet_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droplet_ids' }})
    kubernetes_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kubernetes_ids' }})
    load_balancer_uids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_balancer_uids' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass_json
@dataclass
class AddFirewallRulesRequestBodyInboundRules:
    ports: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ports' }})
    protocol: AddFirewallRulesRequestBodyInboundRulesProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    sources: AddFirewallRulesRequestBodyInboundRulesSources = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    
class AddFirewallRulesRequestBodyOutboundRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"


@dataclass_json
@dataclass
class AddFirewallRulesRequestBodyOutboundRules:
    destinations: shared.Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinations' }})
    ports: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ports' }})
    protocol: AddFirewallRulesRequestBodyOutboundRulesProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    

@dataclass_json
@dataclass
class AddFirewallRulesRequestBody:
    inbound_rules: Optional[List[AddFirewallRulesRequestBodyInboundRules]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inbound_rules' }})
    outbound_rules: Optional[List[AddFirewallRulesRequestBodyOutboundRules]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outbound_rules' }})
    

@dataclass
class AddFirewallRulesRequest:
    path_params: AddFirewallRulesPathParams = field(default=None)
    request: Optional[AddFirewallRulesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class AddFirewallRules401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class AddFirewallRulesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    add_firewall_rules_401_application_json_object: Optional[AddFirewallRules401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
