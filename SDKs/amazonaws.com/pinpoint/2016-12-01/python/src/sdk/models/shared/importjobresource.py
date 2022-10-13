from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import format_enum


@dataclass_json
@dataclass
class ImportJobResource:
    define_segment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefineSegment' }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExternalId' }})
    format: format_enum.FormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Format' }})
    register_endpoints: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegisterEndpoints' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    s3_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Url' }})
    segment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentId' }})
    segment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentName' }})
    
