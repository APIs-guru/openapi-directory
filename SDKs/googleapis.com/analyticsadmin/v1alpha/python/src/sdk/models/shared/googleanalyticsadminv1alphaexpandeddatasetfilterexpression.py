from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaexpandeddatasetfilterexpressionlist
from . import googleanalyticsadminv1alphaexpandeddatasetfilter
from . import googleanalyticsadminv1alphaexpandeddatasetfilterexpression


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression:
    and_group: Optional[googleanalyticsadminv1alphaexpandeddatasetfilterexpressionlist.GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'andGroup' }})
    filter: Optional[googleanalyticsadminv1alphaexpandeddatasetfilter.GoogleAnalyticsAdminV1alphaExpandedDataSetFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    not_expression: Optional[googleanalyticsadminv1alphaexpandeddatasetfilterexpression.GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notExpression' }})
    
