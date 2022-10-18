from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchTypeEnum(str, Enum):
    MATCH_TYPE_UNSPECIFIED = "MATCH_TYPE_UNSPECIFIED"
    EXACT = "EXACT"
    CONTAINS = "CONTAINS"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter:
    case_sensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caseSensitive' }})
    match_type: Optional[GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchType' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
