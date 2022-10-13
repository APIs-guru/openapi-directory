from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import locale
from . import qualificationstatus_enum


@dataclass_json
@dataclass
class Qualification:
    grant_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrantTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    integer_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IntegerValue' }})
    locale_value: Optional[locale.Locale] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocaleValue' }})
    qualification_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QualificationTypeId' }})
    status: Optional[qualificationstatus_enum.QualificationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    worker_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkerId' }})
    
