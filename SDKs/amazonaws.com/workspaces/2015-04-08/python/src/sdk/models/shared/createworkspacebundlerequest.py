from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateWorkspaceBundleRequest:
    bundle_description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BundleDescription') }})
    bundle_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BundleName') }})
    compute_type: ComputeType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComputeType') }})
    image_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageId') }})
    user_storage: UserStorage = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserStorage') }})
    root_storage: Optional[RootStorage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootStorage') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
