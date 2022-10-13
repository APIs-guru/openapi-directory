from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsRdsDbInstanceEndpoint:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address' }})
    hosted_zone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HostedZoneId' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Port' }})
    
