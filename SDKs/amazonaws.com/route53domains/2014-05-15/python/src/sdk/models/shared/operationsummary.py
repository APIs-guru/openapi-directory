from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OperationSummary:
    r"""OperationSummary
    OperationSummary includes the following elements.
    """
    
    operation_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OperationId') }})
    status: OperationStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    submitted_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubmittedDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: OperationTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
