from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEc2NetworkInterfaceIPV6AddressDetail:
    ip_v6_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpV6Address' }})
    
