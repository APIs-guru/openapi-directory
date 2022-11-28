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
class Qualification:
    r"""Qualification
    The Qualification data structure represents a Qualification assigned to a user, including the Qualification type and the value (score).
    """
    
    grant_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    integer_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntegerValue') }})
    locale_value: Optional[Locale] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocaleValue') }})
    qualification_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualificationTypeId') }})
    status: Optional[QualificationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    worker_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkerId') }})
    
