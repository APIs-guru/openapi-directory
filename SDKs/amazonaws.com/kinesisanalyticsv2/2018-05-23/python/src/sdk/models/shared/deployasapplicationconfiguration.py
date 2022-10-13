from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import s3contentbaselocation


@dataclass_json
@dataclass
class DeployAsApplicationConfiguration:
    s3_content_location: s3contentbaselocation.S3ContentBaseLocation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3ContentLocation' }})
    
