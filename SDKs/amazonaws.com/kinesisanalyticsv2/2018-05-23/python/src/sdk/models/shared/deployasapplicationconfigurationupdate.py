from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import s3contentbaselocationupdate


@dataclass_json
@dataclass
class DeployAsApplicationConfigurationUpdate:
    s3_content_location_update: s3contentbaselocationupdate.S3ContentBaseLocationUpdate = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3ContentLocationUpdate' }})
    
