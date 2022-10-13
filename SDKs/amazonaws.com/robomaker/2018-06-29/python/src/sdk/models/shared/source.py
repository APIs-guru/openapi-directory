from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import architecture_enum


@dataclass_json
@dataclass
class Source:
    architecture: Optional[architecture_enum.ArchitectureEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'architecture' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Bucket' }})
    s3_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Key' }})
    
