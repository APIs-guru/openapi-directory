from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import format_enum


@dataclass_json
@dataclass
class SegmentImportResource:
    channel_counts: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelCounts' }})
    external_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExternalId' }})
    format: format_enum.FormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Format' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    s3_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Url' }})
    size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Size' }})
    
