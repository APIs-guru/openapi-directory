from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3KeyOutput:
    r"""S3KeyOutput
    Information about S3 keys.
    """
    
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    s3_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Key') }})
    
