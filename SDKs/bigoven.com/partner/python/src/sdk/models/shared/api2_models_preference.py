from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Api2ModelsPreference:
    eating_style: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EatingStyle' }, 'form': { 'field_name': 'EatingStyle' }})
    
