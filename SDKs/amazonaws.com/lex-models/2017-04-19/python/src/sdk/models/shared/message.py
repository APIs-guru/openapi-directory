from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import contenttype_enum


@dataclass_json
@dataclass
class Message:
    content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    content_type: contenttype_enum.ContentTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentType' }})
    group_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupNumber' }})
    
