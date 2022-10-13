from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import samsungpreviewsection


@dataclass_json
@dataclass
class SamsungPreview:
    expires: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires' }})
    expires_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_only' }})
    sections: List[samsungpreviewsection.SamsungPreviewSection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sections' }})
    
