from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import targetaddress


@dataclass_json
@dataclass
class ResolverRuleConfig:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    resolver_endpoint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResolverEndpointId' }})
    target_ips: Optional[List[targetaddress.TargetAddress]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetIps' }})
    
