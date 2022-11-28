from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SendPipelineExecutionStepSuccessRequest:
    callback_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CallbackToken') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    output_parameters: Optional[List[OutputParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputParameters') }})
    
