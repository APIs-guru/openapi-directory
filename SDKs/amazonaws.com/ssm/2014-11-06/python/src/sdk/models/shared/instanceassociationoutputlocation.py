from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import s3outputlocation


@dataclass_json
@dataclass
class InstanceAssociationOutputLocation:
    s3_location: Optional[s3outputlocation.S3OutputLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Location' }})
    
