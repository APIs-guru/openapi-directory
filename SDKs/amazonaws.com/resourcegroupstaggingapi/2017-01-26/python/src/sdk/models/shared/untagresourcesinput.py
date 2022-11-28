from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UntagResourcesInput:
    resource_arn_list: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARNList') }})
    tag_keys: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagKeys') }})
    
