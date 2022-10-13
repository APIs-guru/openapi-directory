from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Listing:
    full_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullDescription' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortDescription' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    video: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'video' }})
    
