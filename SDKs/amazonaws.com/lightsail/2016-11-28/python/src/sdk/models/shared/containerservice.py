from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContainerService:
    r"""ContainerService
    Describes an Amazon Lightsail container service.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    container_service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerServiceName') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    current_deployment: Optional[ContainerServiceDeployment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentDeployment') }})
    is_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDisabled') }})
    location: Optional[ResourceLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    next_deployment: Optional[ContainerServiceDeployment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextDeployment') }})
    power: Optional[ContainerServicePowerNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('power') }})
    power_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('powerId') }})
    principal_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principalArn') }})
    private_domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateDomainName') }})
    public_domain_names: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicDomainNames') }})
    resource_type: Optional[ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    scale: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scale') }})
    state: Optional[ContainerServiceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_detail: Optional[ContainerServiceStateDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateDetail') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
