from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InputProcessingConfiguration:
    r"""InputProcessingConfiguration
    Provides a description of a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href=\"https://docs.aws.amazon.com/lambda/\">AWS Lambda</a>.
    """
    
    input_lambda_processor: InputLambdaProcessor = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputLambdaProcessor') }})
    
