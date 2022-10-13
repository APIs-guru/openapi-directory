from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awsrdsdbsubnetgroupsubnetavailabilityzone


@dataclass_json
@dataclass
class AwsRdsDbSubnetGroupSubnet:
    subnet_availability_zone: Optional[awsrdsdbsubnetgroupsubnetavailabilityzone.AwsRdsDbSubnetGroupSubnetAvailabilityZone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetAvailabilityZone' }})
    subnet_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIdentifier' }})
    subnet_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetStatus' }})
    
