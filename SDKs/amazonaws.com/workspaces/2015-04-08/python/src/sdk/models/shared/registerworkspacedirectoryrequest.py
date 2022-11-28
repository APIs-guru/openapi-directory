from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegisterWorkspaceDirectoryRequest:
    directory_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    enable_work_docs: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableWorkDocs') }})
    enable_self_service: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableSelfService') }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIds') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    tenancy: Optional[TenancyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tenancy') }})
    
