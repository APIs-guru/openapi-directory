from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import contenttype_enum
from . import genericattachment


@dataclass_json
@dataclass
class ResponseCard:
    content_type: Optional[contenttype_enum.ContentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentType' }})
    generic_attachments: Optional[List[genericattachment.GenericAttachment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'genericAttachments' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
