from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InputProcessingConfigurationUpdate:
    r"""InputProcessingConfigurationUpdate
    Describes updates to an <a href=\"https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html\">InputProcessingConfiguration</a>. 
    """
    
    input_lambda_processor_update: InputLambdaProcessorUpdate = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputLambdaProcessorUpdate') }})
    
