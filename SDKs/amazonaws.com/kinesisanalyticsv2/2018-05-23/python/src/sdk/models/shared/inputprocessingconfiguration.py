from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import inputlambdaprocessor


@dataclass_json
@dataclass
class InputProcessingConfiguration:
    input_lambda_processor: inputlambdaprocessor.InputLambdaProcessor = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputLambdaProcessor' }})
    
