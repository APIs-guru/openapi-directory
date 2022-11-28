from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PerAppResultClearingResultEnum(str, Enum):
    CLEARING_RESULT_UNSPECIFIED = "CLEARING_RESULT_UNSPECIFIED"
    SUCCESS = "SUCCESS"
    APP_NOT_FOUND = "APP_NOT_FOUND"
    APP_PROTECTED = "APP_PROTECTED"
    API_LEVEL = "API_LEVEL"


@dataclass_json
@dataclass
class PerAppResult:
    r"""PerAppResult
    The result of an attempt to clear the data of a single app.
    """
    
    clearing_result: Optional[PerAppResultClearingResultEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clearingResult') }})
    
