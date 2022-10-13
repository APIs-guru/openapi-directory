from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ContextPhoto:
    farm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'farm' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_faved: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_faved' }})
    license: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license' }})
    media: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'media' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    safe: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'safe' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    server: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    thumb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumb' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
