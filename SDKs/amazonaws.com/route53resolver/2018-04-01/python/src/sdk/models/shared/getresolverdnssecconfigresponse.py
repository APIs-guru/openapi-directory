from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resolverdnssecconfig


@dataclass_json
@dataclass
class GetResolverDnssecConfigResponse:
    resolver_dnssec_config: Optional[resolverdnssecconfig.ResolverDnssecConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResolverDNSSECConfig' }})
    
