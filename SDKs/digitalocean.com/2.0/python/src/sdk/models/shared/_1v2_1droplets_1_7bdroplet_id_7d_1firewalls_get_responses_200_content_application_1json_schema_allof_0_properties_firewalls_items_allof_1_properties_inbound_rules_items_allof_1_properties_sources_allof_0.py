from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0:
    addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addresses' }})
    droplet_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droplet_ids' }})
    kubernetes_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kubernetes_ids' }})
    load_balancer_uids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_balancer_uids' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
