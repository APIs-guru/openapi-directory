from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaaudiencefilterexpressionlist
from . import googleanalyticsadminv1alphaaudiencedimensionormetricfilter
from . import googleanalyticsadminv1alphaaudienceeventfilter
from . import googleanalyticsadminv1alphaaudiencefilterexpression
from . import googleanalyticsadminv1alphaaudiencefilterexpressionlist


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAudienceFilterExpression:
    and_group: Optional[googleanalyticsadminv1alphaaudiencefilterexpressionlist.GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'andGroup' }})
    dimension_or_metric_filter: Optional[googleanalyticsadminv1alphaaudiencedimensionormetricfilter.GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionOrMetricFilter' }})
    event_filter: Optional[googleanalyticsadminv1alphaaudienceeventfilter.GoogleAnalyticsAdminV1alphaAudienceEventFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventFilter' }})
    not_expression: Optional[googleanalyticsadminv1alphaaudiencefilterexpression.GoogleAnalyticsAdminV1alphaAudienceFilterExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notExpression' }})
    or_group: Optional[googleanalyticsadminv1alphaaudiencefilterexpressionlist.GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orGroup' }})
    
