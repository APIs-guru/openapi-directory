from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaexpandeddatasetfilterexpression


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionList:
    filter_expressions: Optional[List[googleanalyticsadminv1alphaexpandeddatasetfilterexpression.GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterExpressions' }})
    
