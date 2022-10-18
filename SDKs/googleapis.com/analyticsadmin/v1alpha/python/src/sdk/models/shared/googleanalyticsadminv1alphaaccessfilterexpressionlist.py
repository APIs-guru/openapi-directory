from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaaccessfilterexpression


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAccessFilterExpressionList:
    expressions: Optional[List[googleanalyticsadminv1alphaaccessfilterexpression.GoogleAnalyticsAdminV1alphaAccessFilterExpression]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expressions' }})
    
