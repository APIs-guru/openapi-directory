from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaaudiencedimensionormetricfilterbetweenfilter
from . import googleanalyticsadminv1alphaaudiencedimensionormetricfilterinlistfilter
from . import googleanalyticsadminv1alphaaudiencedimensionormetricfilternumericfilter
from . import googleanalyticsadminv1alphaaudiencedimensionormetricfilterstringfilter


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter:
    at_any_point_in_time: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'atAnyPointInTime' }})
    between_filter: Optional[googleanalyticsadminv1alphaaudiencedimensionormetricfilterbetweenfilter.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'betweenFilter' }})
    field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldName' }})
    in_any_n_day_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inAnyNDayPeriod' }})
    in_list_filter: Optional[googleanalyticsadminv1alphaaudiencedimensionormetricfilterinlistfilter.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inListFilter' }})
    numeric_filter: Optional[googleanalyticsadminv1alphaaudiencedimensionormetricfilternumericfilter.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numericFilter' }})
    string_filter: Optional[googleanalyticsadminv1alphaaudiencedimensionormetricfilterstringfilter.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringFilter' }})
    
