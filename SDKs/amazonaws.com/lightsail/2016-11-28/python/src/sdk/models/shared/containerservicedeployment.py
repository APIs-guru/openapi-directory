from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import container
from . import containerserviceendpoint
from . import containerservicedeploymentstate_enum


@dataclass_json
@dataclass
class ContainerServiceDeployment:
    containers: Optional[dict[str, container.Container]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containers' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    public_endpoint: Optional[containerserviceendpoint.ContainerServiceEndpoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicEndpoint' }})
    state: Optional[containerservicedeploymentstate_enum.ContainerServiceDeploymentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
