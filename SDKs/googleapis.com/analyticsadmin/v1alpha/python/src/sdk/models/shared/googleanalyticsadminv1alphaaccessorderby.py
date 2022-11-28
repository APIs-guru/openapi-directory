from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAccessOrderBy:
    r"""GoogleAnalyticsAdminV1alphaAccessOrderBy
    Order bys define how rows will be sorted in the response. For example, ordering rows by descending access count is one ordering, and ordering rows by the country string is a different ordering.
    """
    
    desc: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    dimension: Optional[GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimension') }})
    metric: Optional[GoogleAnalyticsAdminV1alphaAccessOrderByMetricOrderBy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    
