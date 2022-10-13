from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import dnsrecord
from . import routingpolicy_enum


@dataclass_json
@dataclass
class DNSConfig:
    dns_records: List[dnsrecord.DNSRecord] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsRecords' }})
    namespace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NamespaceId' }})
    routing_policy: Optional[routingpolicy_enum.RoutingPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoutingPolicy' }})
    
