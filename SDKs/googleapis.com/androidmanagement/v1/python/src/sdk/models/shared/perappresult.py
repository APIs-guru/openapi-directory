from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PerAppResultClearingResultEnum(str, Enum):
    CLEARING_RESULT_UNSPECIFIED = "CLEARING_RESULT_UNSPECIFIED"
    SUCCESS = "SUCCESS"
    APP_NOT_FOUND = "APP_NOT_FOUND"
    APP_PROTECTED = "APP_PROTECTED"
    API_LEVEL = "API_LEVEL"


@dataclass_json
@dataclass
class PerAppResult:
    clearing_result: Optional[PerAppResultClearingResultEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clearingResult' }})
    
