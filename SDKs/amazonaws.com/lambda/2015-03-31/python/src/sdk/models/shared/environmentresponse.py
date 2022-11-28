from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnvironmentResponse:
    r"""EnvironmentResponse
    The results of an operation to update or read environment variables. If the operation is successful, the response contains the environment variables. If it failed, the response contains details about the error.
    """
    
    error: Optional[EnvironmentError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Variables') }})
    
