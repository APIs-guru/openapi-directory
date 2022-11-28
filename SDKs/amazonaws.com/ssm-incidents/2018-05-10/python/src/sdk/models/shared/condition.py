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
class Condition:
    r"""Condition
    A conditional statement with which to compare a value, after a timestamp, before a timestamp, or equal to a string or integer. If multiple conditions are specified, the conditionals become an <code>AND</code>ed statement. If multiple values are specified for a conditional, the values are <code>OR</code>d.
    """
    
    after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('after'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('before'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    equals: Optional[AttributeValueList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('equals') }})
    
