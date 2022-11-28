from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutRetentionPolicyRequest:
    folder_configurations: List[FolderConfiguration] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FolderConfigurations') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    organization_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    
