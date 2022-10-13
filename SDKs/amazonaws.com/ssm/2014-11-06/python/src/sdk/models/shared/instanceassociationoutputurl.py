from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import s3outputurl


@dataclass_json
@dataclass
class InstanceAssociationOutputURL:
    s3_output_url: Optional[s3outputurl.S3OutputURL] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3OutputUrl' }})
    
