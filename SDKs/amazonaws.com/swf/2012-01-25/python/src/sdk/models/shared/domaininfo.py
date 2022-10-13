from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import registrationstatus_enum


@dataclass_json
@dataclass
class DomainInfo:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: registrationstatus_enum.RegistrationStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
