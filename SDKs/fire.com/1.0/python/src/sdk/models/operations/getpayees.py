from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class GetPayees200ApplicationJSONCreatedByEnum(str, Enum):
    CUSTOMER = "CUSTOMER"
    LODGEMENT = "LODGEMENT"
    DIRECT_DEBIT = "DIRECT DEBIT"
    OPEN_BANKING = "OPEN BANKING"
    FIRE_OPEN_PAYMENT = "FIRE OPEN PAYMENT"
    FIRE_DIRECT = "FIRE DIRECT"

class GetPayees200ApplicationJSONStatusEnum(str, Enum):
    CREATED = "CREATED"
    LIVE = "LIVE"
    CLOSED = "CLOSED"
    ARCHIVED = "ARCHIVED"


@dataclass_json
@dataclass
class GetPayees200ApplicationJSONPayee:
    account_holder_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountHolderName' }})
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountName' }})
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountNumber' }})
    bic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bic' }})
    created_by: Optional[GetPayees200ApplicationJSONCreatedByEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    currency: Optional[shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateCreated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    iban: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iban' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    nsc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nsc' }})
    status: Optional[GetPayees200ApplicationJSONStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class GetPayeesResponse:
    content_type: str = field(default=None)
    payee: Optional[GetPayees200ApplicationJSONPayee] = field(default=None)
    status_code: int = field(default=None)
    
