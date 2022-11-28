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
    For a SQL-based Kinesis Data Analytics application, describes updates to an <a>InputProcessingConfiguration</a>.
    """
    
    input_lambda_processor_update: InputLambdaProcessorUpdate = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputLambdaProcessorUpdate') }})
    
