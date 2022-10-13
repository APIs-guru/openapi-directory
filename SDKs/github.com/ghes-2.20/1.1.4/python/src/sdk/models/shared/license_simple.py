from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LicenseSimple:
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    spdx_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spdx_id' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
