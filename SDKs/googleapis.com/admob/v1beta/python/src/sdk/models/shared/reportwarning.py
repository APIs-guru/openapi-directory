from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ReportWarningTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    DATA_BEFORE_ACCOUNT_TIMEZONE_CHANGE = "DATA_BEFORE_ACCOUNT_TIMEZONE_CHANGE"
    DATA_DELAYED = "DATA_DELAYED"
    OTHER = "OTHER"
    REPORT_CURRENCY_NOT_ACCOUNT_CURRENCY = "REPORT_CURRENCY_NOT_ACCOUNT_CURRENCY"


@dataclass_json
@dataclass
class ReportWarning:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    type: Optional[ReportWarningTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
