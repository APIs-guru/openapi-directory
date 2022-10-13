from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import documentformat_enum
from . import reviewstatus_enum
from . import documentstatus_enum


@dataclass_json
@dataclass
class DocumentVersionInfo:
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    document_format: Optional[documentformat_enum.DocumentFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentFormat' }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentVersion' }})
    is_default_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsDefaultVersion' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    review_status: Optional[reviewstatus_enum.ReviewStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReviewStatus' }})
    status: Optional[documentstatus_enum.DocumentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusInformation' }})
    version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VersionName' }})
    
