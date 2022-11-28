from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse:
    r"""GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse
    A response that includes the analysis of the hypothetical resource move.
    """
    
    blockers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockers') }})
    
