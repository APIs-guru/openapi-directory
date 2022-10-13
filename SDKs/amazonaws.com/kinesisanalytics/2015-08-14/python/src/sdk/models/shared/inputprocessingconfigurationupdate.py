from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import inputlambdaprocessorupdate


@dataclass_json
@dataclass
class InputProcessingConfigurationUpdate:
    input_lambda_processor_update: inputlambdaprocessorupdate.InputLambdaProcessorUpdate = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputLambdaProcessorUpdate' }})
    
