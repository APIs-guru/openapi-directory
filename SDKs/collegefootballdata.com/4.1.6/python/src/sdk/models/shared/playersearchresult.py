from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PlayerSearchResult:
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    hometown: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hometown' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    jersey: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jersey' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team' }})
    team_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamColor' }})
    team_color_secondary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamColorSecondary' }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    
