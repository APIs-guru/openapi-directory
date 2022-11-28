from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CheckpointConfig:
    r"""CheckpointConfig
    Contains information about the output location for managed spot training checkpoint data. 
    """
    
    s3_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Uri') }})
    local_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalPath') }})
    
