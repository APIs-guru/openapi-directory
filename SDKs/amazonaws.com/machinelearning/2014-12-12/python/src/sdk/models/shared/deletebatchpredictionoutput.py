from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteBatchPredictionOutput:
    r"""DeleteBatchPredictionOutput
    <p> Represents the output of a <code>DeleteBatchPrediction</code> operation.</p> <p>You can use the <code>GetBatchPrediction</code> operation and check the value of the <code>Status</code> parameter to see whether a <code>BatchPrediction</code> is marked as <code>DELETED</code>.</p>
    """
    
    batch_prediction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchPredictionId') }})
    
