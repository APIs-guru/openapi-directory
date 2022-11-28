from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APICoreDtoAccountingExtendedGrants:
    allow_all_grants: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowAllGrants') }, 'form': { 'field_name': 'allowAllGrants' }})
    allow_group_creation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowGroupCreation') }, 'form': { 'field_name': 'allowGroupCreation' }})
    
