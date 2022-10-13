from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SessionManagerOutputURL:
    cloud_watch_output_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchOutputUrl' }})
    s3_output_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3OutputUrl' }})
    
