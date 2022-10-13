from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import s3locationdescription


@dataclass_json
@dataclass
class CustomPluginLocationDescription:
    s3_location: Optional[s3locationdescription.S3LocationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Location' }})
    
