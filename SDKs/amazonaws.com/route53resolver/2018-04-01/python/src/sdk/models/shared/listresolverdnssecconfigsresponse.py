from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resolverdnssecconfig


@dataclass_json
@dataclass
class ListResolverDnssecConfigsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    resolver_dnssec_configs: Optional[List[resolverdnssecconfig.ResolverDnssecConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResolverDnssecConfigs' }})
    
