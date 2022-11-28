from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SessionManagerOutputURL:
    r"""SessionManagerOutputURL
    Reserved for future use.
    """
    
    cloud_watch_output_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchOutputUrl') }})
    s3_output_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3OutputUrl') }})
    
