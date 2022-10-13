from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaaudiencedimensionormetricfilternumericvalue
from . import googleanalyticsadminv1alphaaudiencedimensionormetricfilternumericvalue


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter:
    from_value: Optional[googleanalyticsadminv1alphaaudiencedimensionormetricfilternumericvalue.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromValue' }})
    to_value: Optional[googleanalyticsadminv1alphaaudiencedimensionormetricfilternumericvalue.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toValue' }})
    
