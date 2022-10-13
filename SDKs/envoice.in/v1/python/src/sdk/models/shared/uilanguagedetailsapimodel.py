from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UILanguageDetailsAPIModel:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    ui_culture: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UiCulture' }})
    
