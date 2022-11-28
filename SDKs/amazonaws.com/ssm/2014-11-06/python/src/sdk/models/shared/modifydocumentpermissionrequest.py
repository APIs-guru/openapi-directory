from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModifyDocumentPermissionRequest:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    permission_type: DocumentPermissionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionType') }})
    account_ids_to_add: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountIdsToAdd') }})
    account_ids_to_remove: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountIdsToRemove') }})
    shared_document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SharedDocumentVersion') }})
    
