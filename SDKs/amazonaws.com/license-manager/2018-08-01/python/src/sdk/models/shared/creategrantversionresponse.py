from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import grantstatus_enum


@dataclass_json
@dataclass
class CreateGrantVersionResponse:
    grant_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrantArn' }})
    status: Optional[grantstatus_enum.GrantStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
