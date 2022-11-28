from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTagsForResourceRequest:
    resource_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    resource_type: ResourceTypeForTaggingEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    
