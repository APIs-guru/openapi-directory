from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CreateNewCardRequestBodyAddressTypeEnum(str, Enum):
    HOME = "HOME"
    BUSINESS = "BUSINESS"


@dataclass_json
@dataclass
class CreateNewCardRequestBodyNewCard:
    accept_fees_and_charges: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acceptFeesAndCharges' }})
    address_type: Optional[CreateNewCardRequestBodyAddressTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressType' }})
    card_pin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cardPin' }})
    eur_ican: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eurIcan' }})
    gbp_ican: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gbpIcan' }})
    user_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    

@dataclass
class CreateNewCardRequest:
    request: CreateNewCardRequestBodyNewCard = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class CreateNewCard200ApplicationJSONStatusEnum(str, Enum):
    CREATED_ACTIVE = "CREATED_ACTIVE"
    CREATED_INACTIVE = "CREATED_INACTIVE"


@dataclass_json
@dataclass
class CreateNewCard200ApplicationJSONNewCardResponse:
    card_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cardId' }})
    expiry_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiryDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    masked_pan: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maskedPan' }})
    status: Optional[CreateNewCard200ApplicationJSONStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class CreateNewCardResponse:
    content_type: str = field(default=None)
    new_card_response: Optional[CreateNewCard200ApplicationJSONNewCardResponse] = field(default=None)
    status_code: int = field(default=None)
    
