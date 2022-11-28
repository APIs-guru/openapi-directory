from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeBatchPredictionsOutput:
    r"""DescribeBatchPredictionsOutput
    Represents the output of a <code>DescribeBatchPredictions</code> operation. The content is essentially a list of <code>BatchPrediction</code>s.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    results: Optional[List[BatchPrediction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Results') }})
    
