from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import imageversionstatus_enum


@dataclass_json
@dataclass
class ImageVersion:
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    image_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageArn' }})
    image_version_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageVersionArn' }})
    image_version_status: imageversionstatus_enum.ImageVersionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageVersionStatus' }})
    last_modified_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    version: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
