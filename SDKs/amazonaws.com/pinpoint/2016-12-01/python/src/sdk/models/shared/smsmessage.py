from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import messagetype_enum


@dataclass_json
@dataclass
class SmsMessage:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Body' }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntityId' }})
    keyword: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Keyword' }})
    media_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MediaUrl' }})
    message_type: Optional[messagetype_enum.MessageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessageType' }})
    origination_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OriginationNumber' }})
    sender_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SenderId' }})
    substitutions: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Substitutions' }})
    template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateId' }})
    
