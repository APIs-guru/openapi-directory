from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import inputlambdaprocessordescription


@dataclass_json
@dataclass
class InputProcessingConfigurationDescription:
    input_lambda_processor_description: Optional[inputlambdaprocessordescription.InputLambdaProcessorDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputLambdaProcessorDescription' }})
    
