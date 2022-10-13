from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import imageversionstatus_enum


@dataclass_json
@dataclass
class DescribeImageVersionResponse:
    base_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaseImage' }})
    container_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContainerImage' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    image_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageArn' }})
    image_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageVersionArn' }})
    image_version_status: Optional[imageversionstatus_enum.ImageVersionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageVersionStatus' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
