from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaaccessfilter
from . import googleanalyticsadminv1alphaaccessfilterexpressionlist
from . import googleanalyticsadminv1alphaaccessfilterexpression
from . import googleanalyticsadminv1alphaaccessfilterexpressionlist


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAccessFilterExpression:
    access_filter: Optional[googleanalyticsadminv1alphaaccessfilter.GoogleAnalyticsAdminV1alphaAccessFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessFilter' }})
    and_group: Optional[googleanalyticsadminv1alphaaccessfilterexpressionlist.GoogleAnalyticsAdminV1alphaAccessFilterExpressionList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'andGroup' }})
    not_expression: Optional[googleanalyticsadminv1alphaaccessfilterexpression.GoogleAnalyticsAdminV1alphaAccessFilterExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notExpression' }})
    or_group: Optional[googleanalyticsadminv1alphaaccessfilterexpressionlist.GoogleAnalyticsAdminV1alphaAccessFilterExpressionList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orGroup' }})
    
