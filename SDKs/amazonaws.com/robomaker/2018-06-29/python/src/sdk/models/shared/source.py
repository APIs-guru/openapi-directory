from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Source:
    r"""Source
    Information about a source.
    """
    
    architecture: Optional[ArchitectureEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('architecture') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Bucket') }})
    s3_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Key') }})
    
