from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CodeScanningSarifsStatusProcessingStatusEnum(str, Enum):
    PENDING = "pending"
    COMPLETE = "complete"


@dataclass_json
@dataclass
class CodeScanningSarifsStatus:
    analyses_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyses_url') }})
    processing_status: Optional[CodeScanningSarifsStatusProcessingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processing_status') }})
    
