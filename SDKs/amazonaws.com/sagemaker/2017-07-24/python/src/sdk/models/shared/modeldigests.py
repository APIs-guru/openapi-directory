from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ModelDigests:
    r"""ModelDigests
    Provides information to verify the integrity of stored model artifacts. 
    """
    
    artifact_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArtifactDigest') }})
    
