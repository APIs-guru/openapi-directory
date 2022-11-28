from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAudienceFilterExpression:
    r"""GoogleAnalyticsAdminV1alphaAudienceFilterExpression
    A logical expression of Audience dimension, metric, or event filters.
    """
    
    and_group: Optional[GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('andGroup') }})
    dimension_or_metric_filter: Optional[GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionOrMetricFilter') }})
    event_filter: Optional[GoogleAnalyticsAdminV1alphaAudienceEventFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventFilter') }})
    not_expression: Optional[GoogleAnalyticsAdminV1alphaAudienceFilterExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notExpression') }})
    or_group: Optional[GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orGroup') }})
    
