from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import templateversionstatus_enum


@dataclass_json
@dataclass
class ServiceTemplateVersionSummary:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    last_modified_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    major_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'majorVersion' }})
    minor_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minorVersion' }})
    recommended_minor_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendedMinorVersion' }})
    status: templateversionstatus_enum.TemplateVersionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusMessage' }})
    template_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateName' }})
    
