from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import allowedoperation_enum
from . import grantstatus_enum


@dataclass_json
@dataclass
class CreateGrantVersionRequest:
    allowed_operations: Optional[List[allowedoperation_enum.AllowedOperationEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowedOperations' }})
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    grant_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrantArn' }})
    grant_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrantName' }})
    source_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceVersion' }})
    status: Optional[grantstatus_enum.GrantStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusReason' }})
    
