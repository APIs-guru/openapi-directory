from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MetricsSource:
    content_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentDigest' }})
    content_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentType' }})
    s3_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Uri' }})
    
