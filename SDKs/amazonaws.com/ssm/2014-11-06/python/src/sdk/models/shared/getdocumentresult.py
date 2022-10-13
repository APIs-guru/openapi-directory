from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import attachmentcontent
from . import documentformat_enum
from . import documenttype_enum
from . import documentrequires
from . import reviewstatus_enum
from . import documentstatus_enum


@dataclass_json
@dataclass
class GetDocumentResult:
    attachments_content: Optional[List[attachmentcontent.AttachmentContent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttachmentsContent' }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Content' }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    document_format: Optional[documentformat_enum.DocumentFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentFormat' }})
    document_type: Optional[documenttype_enum.DocumentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentType' }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentVersion' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    requires: Optional[List[documentrequires.DocumentRequires]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Requires' }})
    review_status: Optional[reviewstatus_enum.ReviewStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReviewStatus' }})
    status: Optional[documentstatus_enum.DocumentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusInformation' }})
    version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VersionName' }})
    
