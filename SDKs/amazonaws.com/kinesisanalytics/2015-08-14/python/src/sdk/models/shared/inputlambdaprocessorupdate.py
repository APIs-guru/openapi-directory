from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InputLambdaProcessorUpdate:
    r"""InputLambdaProcessorUpdate
    Represents an update to the <a href=\"https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html\">InputLambdaProcessor</a> that is used to preprocess the records in the stream.
    """
    
    resource_arn_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARNUpdate') }})
    role_arn_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARNUpdate') }})
    
