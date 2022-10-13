from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class V2AndroidApplication:
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageName' }})
    sha1_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha1Fingerprint' }})
    
