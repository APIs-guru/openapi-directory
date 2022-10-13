from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import soa


@dataclass_json
@dataclass
class DNSProperties:
    hosted_zone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HostedZoneId' }})
    soa: Optional[soa.Soa] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SOA' }})
    
