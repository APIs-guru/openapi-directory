from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class License:
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    conditions: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditions' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    featured: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featured' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    implementation: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'implementation' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    limitations: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitations' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    permissions: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    spdx_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spdx_id' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
