from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectorsV1ImageConfig:
    r"""GoogleCloudBeyondcorpAppconnectorsV1ImageConfig
    ImageConfig defines the control plane images to run.
    """
    
    stable_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stableImage') }})
    target_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetImage') }})
    
