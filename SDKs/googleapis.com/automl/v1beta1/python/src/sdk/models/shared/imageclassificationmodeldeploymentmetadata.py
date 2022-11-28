from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImageClassificationModelDeploymentMetadata:
    r"""ImageClassificationModelDeploymentMetadata
    Model deployment metadata specific to Image Classification.
    """
    
    node_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeCount') }})
    
