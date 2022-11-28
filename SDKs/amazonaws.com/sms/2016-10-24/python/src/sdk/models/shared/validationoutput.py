from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ValidationOutput:
    r"""ValidationOutput
    Contains validation output.
    """
    
    app_validation_output: Optional[AppValidationOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appValidationOutput') }})
    latest_validation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestValidationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    server_validation_output: Optional[ServerValidationOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverValidationOutput') }})
    status: Optional[ValidationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    validation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationId') }})
    
