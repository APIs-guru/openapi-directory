from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Track:
    track: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'track' }})
    user_fraction: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userFraction' }})
    version_codes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionCodes' }})
    
