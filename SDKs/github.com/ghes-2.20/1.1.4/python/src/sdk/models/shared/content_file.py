from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ContentFileLinks:
    git: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git' }})
    html: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html' }})
    self: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class ContentFile:
    links: ContentFileLinks = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    download_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_url' }})
    encoding: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encoding' }})
    git_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git_url' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    submodule_git_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submodule_git_url' }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
