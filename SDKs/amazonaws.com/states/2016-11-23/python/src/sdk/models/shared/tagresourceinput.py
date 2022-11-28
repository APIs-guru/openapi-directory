from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TagResourceInput:
    resource_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceArn') }})
    tags: List[Tag] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
