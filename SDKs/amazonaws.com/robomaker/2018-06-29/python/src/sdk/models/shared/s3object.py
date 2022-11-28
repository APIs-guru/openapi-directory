from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3Object:
    r"""S3Object
    Information about an S3 object.
    """
    
    bucket: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket') }})
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    
