from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContainerServiceDeployment:
    r"""ContainerServiceDeployment
    <p>Describes a container deployment configuration of an Amazon Lightsail container service.</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p>
    """
    
    containers: Optional[dict[str, Container]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containers') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    public_endpoint: Optional[ContainerServiceEndpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicEndpoint') }})
    state: Optional[ContainerServiceDeploymentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
