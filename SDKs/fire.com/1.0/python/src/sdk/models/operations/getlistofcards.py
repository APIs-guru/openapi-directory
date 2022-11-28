from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetListofCardsCardsCardProviderEnum(str, Enum):
    MASTERCARD = "MASTERCARD"

class GetListofCardsCardsCardStatusEnum(str, Enum):
    LIVE = "LIVE"
    CREATED_ACTIVE = "CREATED_ACTIVE"
    CREATED_INACTIVE = "CREATED_INACTIVE"
    DEACTIVATED = "DEACTIVATED"

class GetListofCardsCardsCardStatusReasonEnum(str, Enum):
    LOST_CARD = "LOST_CARD"
    STOLEN_CARD = "STOLEN_CARD"
    CARD_DESTROYED = "CARD_DESTROYED"


@dataclass_json
@dataclass
class GetListofCardsCardsCard:
    blocked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked') }})
    card_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardId') }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCreated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    eur_ican: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eurIcan') }})
    expiry_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiryDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    gbp_ican: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gbpIcan') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    masked_pan: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maskedPan') }})
    provider: Optional[GetListofCardsCardsCardProviderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    status: Optional[GetListofCardsCardsCardStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_reason: Optional[GetListofCardsCardsCardStatusReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusReason') }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    

@dataclass_json
@dataclass
class GetListofCardsCards:
    cards: Optional[List[GetListofCardsCardsCard]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cards') }})
    

@dataclass
class GetListofCardsResponse:
    content_type: str = field()
    status_code: int = field()
    cards: Optional[GetListofCardsCards] = field(default=None)
    
