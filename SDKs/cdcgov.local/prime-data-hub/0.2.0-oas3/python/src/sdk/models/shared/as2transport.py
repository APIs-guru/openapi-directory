from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class As2Transport:
    content_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentDescription' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    receiver_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receiverId' }})
    receiver_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receiverUrl' }})
    sender_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'senderEmail' }})
    sender_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'senderId' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
