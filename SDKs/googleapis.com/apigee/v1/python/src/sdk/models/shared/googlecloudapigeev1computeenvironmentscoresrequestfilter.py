from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter:
    r"""GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter
    Filter scores by component path. Used custom filter instead of AIP-160 as the use cases are highly constrained and predictable.
    """
    
    score_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scorePath') }})
    
