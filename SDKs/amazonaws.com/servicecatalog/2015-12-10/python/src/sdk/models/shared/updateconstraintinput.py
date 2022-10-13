from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateConstraintInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    
