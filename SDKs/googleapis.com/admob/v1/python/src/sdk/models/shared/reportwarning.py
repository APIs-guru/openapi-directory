from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ReportWarningTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    DATA_BEFORE_ACCOUNT_TIMEZONE_CHANGE = "DATA_BEFORE_ACCOUNT_TIMEZONE_CHANGE"
    DATA_DELAYED = "DATA_DELAYED"
    OTHER = "OTHER"
    REPORT_CURRENCY_NOT_ACCOUNT_CURRENCY = "REPORT_CURRENCY_NOT_ACCOUNT_CURRENCY"


@dataclass_json
@dataclass
class ReportWarning:
    r"""ReportWarning
    Warnings associated with generation of the report.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    type: Optional[ReportWarningTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
