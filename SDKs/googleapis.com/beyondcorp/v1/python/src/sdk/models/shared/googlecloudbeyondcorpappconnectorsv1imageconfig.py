from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectorsV1ImageConfig:
    stable_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stableImage' }})
    target_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetImage' }})
    
