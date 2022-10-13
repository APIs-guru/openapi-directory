from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RunnerApplication:
    architecture: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'architecture' }})
    download_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_url' }})
    filename: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filename' }})
    os: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os' }})
    sha256_checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha256_checksum' }})
    temp_download_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'temp_download_token' }})
    
