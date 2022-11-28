from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateMlModelOutput:
    r"""CreateMlModelOutput
    <p> Represents the output of a <code>CreateMLModel</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateMLModel</code> operation is asynchronous. You can poll for status updates by using the <code>GetMLModel</code> operation and checking the <code>Status</code> parameter. </p>
    """
    
    ml_model_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MLModelId') }})
    
