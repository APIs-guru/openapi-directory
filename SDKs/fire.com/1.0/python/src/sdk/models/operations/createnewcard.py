from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CreateNewCardNewCardAddressTypeEnum(str, Enum):
    HOME = "HOME"
    BUSINESS = "BUSINESS"


@dataclass_json
@dataclass
class CreateNewCardNewCard:
    accept_fees_and_charges: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acceptFeesAndCharges' }})
    address_type: Optional[CreateNewCardNewCardAddressTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressType' }})
    card_pin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cardPin' }})
    eur_ican: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eurIcan' }})
    gbp_ican: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gbpIcan' }})
    user_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    

@dataclass
class CreateNewCardRequest:
    request: CreateNewCardNewCard = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class CreateNewCardNewCardResponseStatusEnum(str, Enum):
    CREATED_ACTIVE = "CREATED_ACTIVE"
    CREATED_INACTIVE = "CREATED_INACTIVE"


@dataclass_json
@dataclass
class CreateNewCardNewCardResponse:
    card_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cardId' }})
    expiry_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiryDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    masked_pan: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maskedPan' }})
    status: Optional[CreateNewCardNewCardResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class CreateNewCardResponse:
    content_type: str = field(default=None)
    new_card_response: Optional[CreateNewCardNewCardResponse] = field(default=None)
    status_code: int = field(default=None)
    
