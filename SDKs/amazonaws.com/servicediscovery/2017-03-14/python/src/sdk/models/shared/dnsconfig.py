from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DNSConfig:
    r"""DNSConfig
    A complex type that contains information about the Amazon Route 53 DNS records that you want Cloud Map to create when you register an instance.
    """
    
    dns_records: List[DNSRecord] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsRecords') }})
    namespace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NamespaceId') }})
    routing_policy: Optional[RoutingPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoutingPolicy') }})
    
