from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import messagecontenttype_enum
from . import imageresponsecard


@dataclass_json
@dataclass
class Message:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    content_type: messagecontenttype_enum.MessageContentTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentType' }})
    image_response_card: Optional[imageresponsecard.ImageResponseCard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageResponseCard' }})
    
