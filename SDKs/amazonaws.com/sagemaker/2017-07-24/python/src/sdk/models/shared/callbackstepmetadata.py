from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CallbackStepMetadata:
    r"""CallbackStepMetadata
    Metadata about a callback step.
    """
    
    callback_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CallbackToken') }})
    output_parameters: Optional[List[OutputParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputParameters') }})
    sqs_queue_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SqsQueueUrl') }})
    
