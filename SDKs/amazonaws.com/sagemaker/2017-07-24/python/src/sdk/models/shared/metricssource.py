from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MetricsSource:
    r"""MetricsSource
    <p/>
    """
    
    content_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentType') }})
    s3_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Uri') }})
    content_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentDigest') }})
    
