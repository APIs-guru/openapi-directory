from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FirmwareInfo:
    download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_url' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    release_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'release_date' }})
    sha2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha2' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
