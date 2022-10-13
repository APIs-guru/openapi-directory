from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UITemplateInfo:
    content_sha256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentSha256' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Url' }})
    
