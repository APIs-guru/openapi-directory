from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LicenseContentLinks:
    git: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git' }})
    html: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html' }})
    self: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class LicenseContentLicenseSimple:
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    spdx_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spdx_id' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class LicenseContent:
    links: LicenseContentLinks = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    download_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_url' }})
    encoding: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encoding' }})
    git_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git_url' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    license: LicenseContentLicenseSimple = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
