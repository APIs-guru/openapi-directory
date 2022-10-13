from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateWorkspaceBundleRequest:
    bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BundleId' }})
    image_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageId' }})
    
