from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class HeaderTypeEnum(str, Enum):
    HEADER_TYPE_UNSPECIFIED = "HEADER_TYPE_UNSPECIFIED"
    DIMENSION = "DIMENSION"
    METRIC_TALLY = "METRIC_TALLY"
    METRIC_RATIO = "METRIC_RATIO"
    METRIC_CURRENCY = "METRIC_CURRENCY"
    METRIC_MILLISECONDS = "METRIC_MILLISECONDS"
    METRIC_DECIMAL = "METRIC_DECIMAL"


@dataclass_json
@dataclass
class Header:
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[HeaderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
