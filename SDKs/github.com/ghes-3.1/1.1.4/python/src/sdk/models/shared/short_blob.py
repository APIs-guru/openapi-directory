from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ShortBlob:
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
