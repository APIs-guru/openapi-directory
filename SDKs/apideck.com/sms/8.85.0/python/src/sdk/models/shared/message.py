from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class MessageDirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND_API = "outbound-api"
    OUTBOUND_CALL = "outbound-call"
    OUTBOUND_REPLY = "outbound-reply"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class MessageError:
    r"""MessageError
    The error returned if your message status is failed or undelivered.
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class MessagePrice:
    r"""MessagePrice
    Price of the message.
    """
    
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    per_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_unit') }})
    total_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_amount') }})
    
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
class MessageInput:
    body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    from_: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    messaging_service_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messaging_service_id') }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    scheduled_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduled_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    type: Optional[MessageMessageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    webhook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook_url') }})
    

@dataclass_json
@dataclass
class Message:
    body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    from_: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    direction: Optional[MessageDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    error: Optional[MessageError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    messaging_service_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messaging_service_id') }})
    number_of_media_files: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number_of_media_files') }})
    number_of_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number_of_units') }})
    price: Optional[MessagePrice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    scheduled_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduled_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sent_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sent_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[MessageStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    type: Optional[MessageMessageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_by') }})
    webhook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook_url') }})
    
