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
class UpdateServiceInstanceInput:
    deployment_type: DeploymentUpdateTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentType') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    template_major_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateMajorVersion') }})
    template_minor_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateMinorVersion') }})
    
