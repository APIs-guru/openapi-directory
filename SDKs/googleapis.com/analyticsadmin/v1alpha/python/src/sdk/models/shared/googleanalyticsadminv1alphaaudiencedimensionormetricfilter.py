from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter:
    r"""GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter
    A specific filter for a single dimension or metric.
    """
    
    at_any_point_in_time: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('atAnyPointInTime') }})
    between_filter: Optional[GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('betweenFilter') }})
    field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldName') }})
    in_any_n_day_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inAnyNDayPeriod') }})
    in_list_filter: Optional[GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inListFilter') }})
    numeric_filter: Optional[GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numericFilter') }})
    string_filter: Optional[GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringFilter') }})
    
