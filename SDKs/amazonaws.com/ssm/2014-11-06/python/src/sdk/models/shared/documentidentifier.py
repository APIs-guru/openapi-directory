from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import documentformat_enum
from . import documenttype_enum
from . import platformtype_enum
from . import documentrequires
from . import reviewstatus_enum
from . import tag


@dataclass_json
@dataclass
class DocumentIdentifier:
    author: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Author' }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    document_format: Optional[documentformat_enum.DocumentFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentFormat' }})
    document_type: Optional[documenttype_enum.DocumentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentType' }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentVersion' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Owner' }})
    platform_types: Optional[List[platformtype_enum.PlatformTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlatformTypes' }})
    requires: Optional[List[documentrequires.DocumentRequires]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Requires' }})
    review_status: Optional[reviewstatus_enum.ReviewStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReviewStatus' }})
    schema_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaVersion' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    target_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetType' }})
    version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VersionName' }})
    
