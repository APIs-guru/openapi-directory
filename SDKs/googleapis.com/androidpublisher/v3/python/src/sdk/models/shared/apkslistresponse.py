from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import apk


@dataclass_json
@dataclass
class ApksListResponse:
    apks: Optional[List[apk.Apk]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apks' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
