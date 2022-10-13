from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RunnerApplication:
    architecture: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'architecture' }})
    download_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_url' }})
    filename: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filename' }})
    os: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os' }})
    
