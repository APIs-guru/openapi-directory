from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteMlModelOutput:
    r"""DeleteMlModelOutput
    <p>Represents the output of a <code>DeleteMLModel</code> operation.</p> <p>You can use the <code>GetMLModel</code> operation and check the value of the <code>Status</code> parameter to see whether an <code>MLModel</code> is marked as <code>DELETED</code>.</p>
    """
    
    ml_model_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MLModelId') }})
    
