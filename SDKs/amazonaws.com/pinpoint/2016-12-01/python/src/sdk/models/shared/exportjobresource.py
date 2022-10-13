from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExportJobResource:
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    s3_url_prefix: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3UrlPrefix' }})
    segment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentId' }})
    segment_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentVersion' }})
    
