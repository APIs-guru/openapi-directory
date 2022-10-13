from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Preview:
    fallback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fallback' }})
    footer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'footer' }})
    header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header' }})
    header_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header_link' }})
    html_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_text' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    title_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title_link' }})
    
