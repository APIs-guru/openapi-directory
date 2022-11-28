from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Api2ModelsAccounting:
    credit_balance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditBalance') }, 'form': { 'field_name': 'CreditBalance' }})
    member_since: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MemberSince'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'MemberSince' }})
    premium_expiry_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PremiumExpiryDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'PremiumExpiryDate' }})
    user_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserLevel') }, 'form': { 'field_name': 'UserLevel' }})
    
