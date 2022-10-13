from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CodeScanningSarifsStatusProcessingStatusEnum(str, Enum):
    PENDING = "pending"
    COMPLETE = "complete"


@dataclass_json
@dataclass
class CodeScanningSarifsStatus:
    analyses_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analyses_url' }})
    processing_status: Optional[CodeScanningSarifsStatusProcessingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processing_status' }})
    
