from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RunnerApplication:
    r"""RunnerApplication
    Runner Application
    """
    
    architecture: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('architecture') }})
    download_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_url') }})
    filename: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    os: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os') }})
    sha256_checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha256_checksum') }})
    temp_download_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('temp_download_token') }})
    
