from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateModelPackageGroupInput:
    model_package_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelPackageGroupName') }})
    model_package_group_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelPackageGroupDescription') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
