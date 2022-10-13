from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import messagetype_enum


@dataclass_json
@dataclass
class JourneySmsMessage:
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntityId' }})
    message_type: Optional[messagetype_enum.MessageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessageType' }})
    origination_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OriginationNumber' }})
    sender_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SenderId' }})
    template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateId' }})
    
