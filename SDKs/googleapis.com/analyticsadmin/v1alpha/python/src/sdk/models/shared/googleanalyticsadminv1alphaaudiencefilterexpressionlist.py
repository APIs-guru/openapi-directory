from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaaudiencefilterexpression


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList:
    filter_expressions: Optional[List[googleanalyticsadminv1alphaaudiencefilterexpression.GoogleAnalyticsAdminV1alphaAudienceFilterExpression]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterExpressions' }})
    
