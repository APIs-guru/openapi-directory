from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteEvaluationOutput:
    r"""DeleteEvaluationOutput
    <p> Represents the output of a <code>DeleteEvaluation</code> operation. The output indicates that Amazon Machine Learning (Amazon ML) received the request.</p> <p>You can use the <code>GetEvaluation</code> operation and check the value of the <code>Status</code> parameter to see whether an <code>Evaluation</code> is marked as <code>DELETED</code>.</p>
    """
    
    evaluation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationId') }})
    
