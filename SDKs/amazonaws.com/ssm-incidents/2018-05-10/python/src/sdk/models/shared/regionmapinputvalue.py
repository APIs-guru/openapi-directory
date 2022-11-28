from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RegionMapInputValue:
    r"""RegionMapInputValue
    The mapping between a Region and the key that's used to encrypt the data.
    """
    
    sse_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sseKmsKeyId') }})
    
