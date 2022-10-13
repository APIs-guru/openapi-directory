from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import outputparameter


@dataclass_json
@dataclass
class SendPipelineExecutionStepSuccessRequest:
    callback_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CallbackToken' }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    output_parameters: Optional[List[outputparameter.OutputParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputParameters' }})
    
