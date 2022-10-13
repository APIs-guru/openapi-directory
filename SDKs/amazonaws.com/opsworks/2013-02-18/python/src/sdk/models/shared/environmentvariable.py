from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EnvironmentVariable:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    secure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Secure' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
