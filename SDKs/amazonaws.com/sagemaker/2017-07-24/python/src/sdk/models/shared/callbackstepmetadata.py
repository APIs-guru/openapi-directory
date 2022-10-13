from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import outputparameter


@dataclass_json
@dataclass
class CallbackStepMetadata:
    callback_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CallbackToken' }})
    output_parameters: Optional[List[outputparameter.OutputParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputParameters' }})
    sqs_queue_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SqsQueueUrl' }})
    
