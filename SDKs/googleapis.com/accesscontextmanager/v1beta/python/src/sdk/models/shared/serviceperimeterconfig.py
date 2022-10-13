from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import vpcaccessibleservices


@dataclass_json
@dataclass
class ServicePerimeterConfig:
    access_levels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessLevels' }})
    resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    restricted_services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictedServices' }})
    unrestricted_services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unrestrictedServices' }})
    vpc_accessible_services: Optional[vpcaccessibleservices.VpcAccessibleServices] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcAccessibleServices' }})
    
