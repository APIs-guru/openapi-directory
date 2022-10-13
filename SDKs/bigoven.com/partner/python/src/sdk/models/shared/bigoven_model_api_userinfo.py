from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BigOvenModelAPIUserInfo:
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstName' }})
    image_url48: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageUrl48' }})
    is_kitchen_helper: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsKitchenHelper' }})
    is_premium: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsPremium' }})
    is_using_recurly: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsUsingRecurly' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastName' }})
    member_since: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MemberSince', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhotoUrl' }})
    photo_url48: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhotoUrl48' }})
    premium_expiry_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PremiumExpiryDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserID' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserName' }})
    web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebUrl' }})
    
