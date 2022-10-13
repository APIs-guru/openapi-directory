from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import attachmentinformation
from . import documentformat_enum
from . import documenttype_enum
from . import documenthashtype_enum
from . import documentparameter
from . import platformtype_enum
from . import documentrequires
from . import reviewinformation
from . import reviewstatus_enum
from . import documentstatus_enum
from . import tag


@dataclass_json
@dataclass
class DocumentDescription:
    approved_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApprovedVersion' }})
    attachments_information: Optional[List[attachmentinformation.AttachmentInformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttachmentsInformation' }})
    author: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Author' }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultVersion' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    document_format: Optional[documentformat_enum.DocumentFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentFormat' }})
    document_type: Optional[documenttype_enum.DocumentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentType' }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentVersion' }})
    hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Hash' }})
    hash_type: Optional[documenthashtype_enum.DocumentHashTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HashType' }})
    latest_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestVersion' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Owner' }})
    parameters: Optional[List[documentparameter.DocumentParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    pending_review_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PendingReviewVersion' }})
    platform_types: Optional[List[platformtype_enum.PlatformTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlatformTypes' }})
    requires: Optional[List[documentrequires.DocumentRequires]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Requires' }})
    review_information: Optional[List[reviewinformation.ReviewInformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReviewInformation' }})
    review_status: Optional[reviewstatus_enum.ReviewStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReviewStatus' }})
    schema_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaVersion' }})
    sha1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sha1' }})
    status: Optional[documentstatus_enum.DocumentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusInformation' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    target_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetType' }})
    version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VersionName' }})
    
