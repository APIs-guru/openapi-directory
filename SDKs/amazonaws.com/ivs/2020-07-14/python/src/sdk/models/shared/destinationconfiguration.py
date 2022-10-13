from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import s3destinationconfiguration


@dataclass_json
@dataclass
class DestinationConfiguration:
    s3: Optional[s3destinationconfiguration.S3DestinationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3' }})
    
