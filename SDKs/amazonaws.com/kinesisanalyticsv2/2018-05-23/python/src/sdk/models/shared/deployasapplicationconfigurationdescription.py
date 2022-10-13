from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import s3contentbaselocationdescription


@dataclass_json
@dataclass
class DeployAsApplicationConfigurationDescription:
    s3_content_location_description: s3contentbaselocationdescription.S3ContentBaseLocationDescription = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3ContentLocationDescription' }})
    
