from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEc2VpnConnectionRoutesDetails:
    destination_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationCidrBlock' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
