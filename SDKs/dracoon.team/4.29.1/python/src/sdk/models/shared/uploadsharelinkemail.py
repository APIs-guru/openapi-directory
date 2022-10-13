from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UploadShareLinkEmail:
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    receiver_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receiverLanguage' }})
    recipients: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipients' }})
    
