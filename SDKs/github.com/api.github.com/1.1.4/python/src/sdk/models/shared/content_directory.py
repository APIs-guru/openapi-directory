from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ContentDirectoryLinks:
    git: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git' }})
    html: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html' }})
    self: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class ContentDirectory:
    links: ContentDirectoryLinks = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    download_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_url' }})
    git_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git_url' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
