from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InputProcessingConfigurationDescription:
    r"""InputProcessingConfigurationDescription
    For a SQL-based Kinesis Data Analytics application, provides the configuration information about an input processor. Currently, the only input processor available is <a href=\"https://docs.aws.amazon.com/lambda/\">AWS Lambda</a>.
    """
    
    input_lambda_processor_description: Optional[InputLambdaProcessorDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputLambdaProcessorDescription') }})
    
