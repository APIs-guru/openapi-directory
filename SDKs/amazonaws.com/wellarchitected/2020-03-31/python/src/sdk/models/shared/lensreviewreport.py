from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LensReviewReport:
    base64_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Base64String' }})
    lens_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LensAlias' }})
    
