from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsS3ObjectDetails:
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentType' }})
    e_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ETag' }})
    last_modified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModified' }})
    ssekms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SSEKMSKeyId' }})
    server_side_encryption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerSideEncryption' }})
    version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VersionId' }})
    
