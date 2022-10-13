from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class CreateFirewallRequestBodyInboundRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"


@dataclass_json
@dataclass
class CreateFirewallRequestBodyInboundRulesSources:
    addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addresses' }})
    droplet_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droplet_ids' }})
    kubernetes_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kubernetes_ids' }})
    load_balancer_uids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_balancer_uids' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass_json
@dataclass
class CreateFirewallRequestBodyInboundRules:
    ports: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ports' }})
    protocol: CreateFirewallRequestBodyInboundRulesProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    sources: CreateFirewallRequestBodyInboundRulesSources = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    
class CreateFirewallRequestBodyOutboundRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"


@dataclass_json
@dataclass
class CreateFirewallRequestBodyOutboundRules:
    destinations: shared.Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinations' }})
    ports: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ports' }})
    protocol: CreateFirewallRequestBodyOutboundRulesProtocolEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    

@dataclass_json
@dataclass
class CreateFirewallRequestBodyPendingChanges:
    droplet_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droplet_id' }})
    removing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removing' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
class CreateFirewallRequestBodyStatusEnum(str, Enum):
    WAITING = "waiting"
    SUCCEEDED = "succeeded"
    FAILED = "failed"


@dataclass_json
@dataclass
class CreateFirewallRequestBody:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    droplet_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droplet_ids' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    inbound_rules: Optional[List[CreateFirewallRequestBodyInboundRules]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inbound_rules' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    outbound_rules: Optional[List[CreateFirewallRequestBodyOutboundRules]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outbound_rules' }})
    pending_changes: Optional[List[CreateFirewallRequestBodyPendingChanges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pending_changes' }})
    status: Optional[CreateFirewallRequestBodyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateFirewallRequest:
    request: Optional[CreateFirewallRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CreateFirewall401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class CreateFirewallResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    create_firewall_202_application_json_any: Optional[Any] = field(default=None)
    create_firewall_401_application_json_object: Optional[CreateFirewall401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
