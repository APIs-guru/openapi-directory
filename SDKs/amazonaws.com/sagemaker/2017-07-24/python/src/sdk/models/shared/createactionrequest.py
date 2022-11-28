from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateActionRequest:
    action_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionName') }})
    action_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionType') }})
    source: ActionSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    metadata_properties: Optional[MetadataProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetadataProperties') }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Properties') }})
    status: Optional[ActionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
