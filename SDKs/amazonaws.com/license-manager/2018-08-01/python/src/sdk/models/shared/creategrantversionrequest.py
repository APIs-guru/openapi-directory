from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateGrantVersionRequest:
    client_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    grant_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantArn') }})
    allowed_operations: Optional[List[AllowedOperationEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedOperations') }})
    grant_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantName') }})
    source_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceVersion') }})
    status: Optional[GrantStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusReason') }})
    
