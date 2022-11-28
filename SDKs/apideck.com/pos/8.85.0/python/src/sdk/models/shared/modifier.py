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
class Modifier:
    modifier_group_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifier_group_id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    alternate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternate_name') }})
    available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    idempotency_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idempotency_key') }})
    price_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_amount') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_by') }})
    

@dataclass_json
@dataclass
class ModifierInput:
    modifier_group_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifier_group_id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    alternate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternate_name') }})
    available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available') }})
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    idempotency_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idempotency_key') }})
    price_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_amount') }})
    
