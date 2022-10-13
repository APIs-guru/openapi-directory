from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import attachmentssource
from . import documentformat_enum
from . import documenttype_enum
from . import documentrequires
from . import tag


@dataclass_json
@dataclass
class CreateDocumentRequest:
    attachments: Optional[List[attachmentssource.AttachmentsSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attachments' }})
    content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Content' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    document_format: Optional[documentformat_enum.DocumentFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentFormat' }})
    document_type: Optional[documenttype_enum.DocumentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentType' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    requires: Optional[List[documentrequires.DocumentRequires]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Requires' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    target_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetType' }})
    version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VersionName' }})
    
