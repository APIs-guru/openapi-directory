from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json

class MessageEncodingEnum(str, Enum):
    TEXT = "TEXT"
    UNICODE = "UNICODE"
    BINARY = "BINARY"

class MessageStatusSubtypeEnum(str, Enum):
    EXPIRED = "EXPIRED"
    HANDSET_ERROR = "HANDSET_ERROR"
    BLOCKED = "BLOCKED"
    NOT_SENT = "NOT_SENT"

class MessageStatusTypeEnum(str, Enum):
    ACCEPTED = "ACCEPTED"
    SCHEDULED = "SCHEDULED"
    SENT = "SENT"
    DELIVERED = "DELIVERED"
    UNKNOWN = "UNKNOWN"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class MessageStatus:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    subtype: Optional[MessageStatusSubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtype' }})
    type: MessageStatusTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class MessageSubmission:
    date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class MessageTypeEnum(str, Enum):
    SENT = "SENT"
    RECEIVED = "RECEIVED"


@dataclass_json
@dataclass
class Message:
    body: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    credit_cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditCost' }})
    encoding: Optional[MessageEncodingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encoding' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message_class: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageClass' }})
    number_of_parts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfParts' }})
    protocol_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocolId' }})
    related_sent_message_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedSentMessageId' }})
    status: MessageStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    submission: Optional[MessageSubmission] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submission' }})
    to: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    type: MessageTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    user_supplied_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userSuppliedId' }})
    
