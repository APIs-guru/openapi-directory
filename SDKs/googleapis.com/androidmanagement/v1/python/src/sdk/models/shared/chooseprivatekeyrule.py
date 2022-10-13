from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ChoosePrivateKeyRule:
    package_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageNames' }})
    private_key_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateKeyAlias' }})
    url_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlPattern' }})
    
