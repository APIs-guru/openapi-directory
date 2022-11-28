from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAccessFilterExpression:
    r"""GoogleAnalyticsAdminV1alphaAccessFilterExpression
    Expresses dimension or metric filters. The fields in the same expression need to be either all dimensions or all metrics.
    """
    
    access_filter: Optional[GoogleAnalyticsAdminV1alphaAccessFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessFilter') }})
    and_group: Optional[GoogleAnalyticsAdminV1alphaAccessFilterExpressionList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('andGroup') }})
    not_expression: Optional[GoogleAnalyticsAdminV1alphaAccessFilterExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notExpression') }})
    or_group: Optional[GoogleAnalyticsAdminV1alphaAccessFilterExpressionList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orGroup') }})
    
