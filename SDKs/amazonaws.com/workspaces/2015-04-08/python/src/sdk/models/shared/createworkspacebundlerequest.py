from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import computetype
from . import rootstorage
from . import tag
from . import userstorage


@dataclass_json
@dataclass
class CreateWorkspaceBundleRequest:
    bundle_description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BundleDescription' }})
    bundle_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BundleName' }})
    compute_type: computetype.ComputeType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComputeType' }})
    image_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageId' }})
    root_storage: Optional[rootstorage.RootStorage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RootStorage' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    user_storage: userstorage.UserStorage = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserStorage' }})
    
