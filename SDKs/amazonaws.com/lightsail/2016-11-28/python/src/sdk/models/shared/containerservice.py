from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import containerservicedeployment
from . import resourcelocation
from . import containerservicedeployment
from . import containerservicepowername_enum
from . import resourcetype_enum
from . import containerservicestate_enum
from . import containerservicestatedetail
from . import tag


@dataclass_json
@dataclass
class ContainerService:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    container_service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerServiceName' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    current_deployment: Optional[containerservicedeployment.ContainerServiceDeployment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentDeployment' }})
    is_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDisabled' }})
    location: Optional[resourcelocation.ResourceLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    next_deployment: Optional[containerservicedeployment.ContainerServiceDeployment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextDeployment' }})
    power: Optional[containerservicepowername_enum.ContainerServicePowerNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'power' }})
    power_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'powerId' }})
    principal_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principalArn' }})
    private_domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateDomainName' }})
    public_domain_names: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicDomainNames' }})
    resource_type: Optional[resourcetype_enum.ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    scale: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scale' }})
    state: Optional[containerservicestate_enum.ContainerServiceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    state_detail: Optional[containerservicestatedetail.ContainerServiceStateDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateDetail' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
