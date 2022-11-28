from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RemoveTagsFromResourceRequest:
    resource_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    resource_type: ResourceTypeForTaggingEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    tag_keys: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagKeys') }})
    
