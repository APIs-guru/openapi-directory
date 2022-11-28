from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression:
    r"""GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression
    A logical expression of EnhancedDataSet dimension filters.
    """
    
    and_group: Optional[GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('andGroup') }})
    filter: Optional[GoogleAnalyticsAdminV1alphaExpandedDataSetFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    not_expression: Optional[GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notExpression') }})
    
