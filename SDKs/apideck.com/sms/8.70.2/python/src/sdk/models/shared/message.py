from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import currency_enum

class MessageDirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND_API = "outbound-api"
    OUTBOUND_CALL = "outbound-call"
    OUTBOUND_REPLY = "outbound-reply"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class MessageError:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class MessagePrice:
    currency: Optional[currency_enum.CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    per_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_unit' }})
    total_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_amount' }})
    
class MessageStatusEnum(str, Enum):
    ACCEPTED = "accepted"
    SCHEDULED = "scheduled"
    CANCELED = "canceled"
    QUEUED = "queued"
    SENDING = "sending"
    SENT = "sent"
    FAILED = "failed"
    DELIVERED = "delivered"
    UNDELIVERED = "undelivered"
    RECEIVING = "receiving"
    RECEIVED = "received"
    READ = "read"

class MessageMessageTypeEnum(str, Enum):
    SMS = "sms"
    MMS = "mms"


@dataclass_json
@dataclass
class Message:
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    direction: Optional[MessageDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    error: Optional[MessageError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    from_: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    messaging_service_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messaging_service_id' }})
    number_of_media_files: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number_of_media_files' }})
    number_of_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number_of_units' }})
    price: Optional[MessagePrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference' }})
    scheduled_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduled_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sent_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sent_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[MessageStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject' }})
    to: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    type: Optional[MessageMessageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_by' }})
    webhook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhook_url' }})
    
