from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphanumericvalue

class GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnum(str, Enum):
    OPERATION_UNSPECIFIED = "OPERATION_UNSPECIFIED"
    EQUAL = "EQUAL"
    LESS_THAN = "LESS_THAN"
    LESS_THAN_OR_EQUAL = "LESS_THAN_OR_EQUAL"
    GREATER_THAN = "GREATER_THAN"
    GREATER_THAN_OR_EQUAL = "GREATER_THAN_OR_EQUAL"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAccessNumericFilter:
    operation: Optional[GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    value: Optional[googleanalyticsadminv1alphanumericvalue.GoogleAnalyticsAdminV1alphaNumericValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
