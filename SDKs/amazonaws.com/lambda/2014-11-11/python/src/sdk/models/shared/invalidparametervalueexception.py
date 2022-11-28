from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InvalidParameterValueException:
    r"""InvalidParameterValueException
    One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>UploadFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception. 
    """
    
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
