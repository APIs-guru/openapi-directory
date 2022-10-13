from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import egresspolicy
from . import ingresspolicy
from . import vpcaccessibleservices


@dataclass_json
@dataclass
class ServicePerimeterConfig:
    access_levels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessLevels' }})
    egress_policies: Optional[List[egresspolicy.EgressPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'egressPolicies' }})
    ingress_policies: Optional[List[ingresspolicy.IngressPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingressPolicies' }})
    resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    restricted_services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictedServices' }})
    vpc_accessible_services: Optional[vpcaccessibleservices.VpcAccessibleServices] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcAccessibleServices' }})
    
