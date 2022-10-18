from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaaudiencedimensionormetricfilternumericvalue

class GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnum(str, Enum):
    OPERATION_UNSPECIFIED = "OPERATION_UNSPECIFIED"
    EQUAL = "EQUAL"
    LESS_THAN = "LESS_THAN"
    GREATER_THAN = "GREATER_THAN"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter:
    operation: Optional[GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    value: Optional[googleanalyticsadminv1alphaaudiencedimensionormetricfilternumericvalue.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
