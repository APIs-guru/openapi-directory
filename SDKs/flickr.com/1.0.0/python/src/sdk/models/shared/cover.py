from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Cover:
    farm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'farm' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    isfamily: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isfamily' }})
    isfriend: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isfriend' }})
    ispublic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ispublic' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    server: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    y: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'y' }})
    
