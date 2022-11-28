from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderTypeEnum(str, Enum):
    ORDER_TYPE_UNSPECIFIED = "ORDER_TYPE_UNSPECIFIED"
    ALPHANUMERIC = "ALPHANUMERIC"
    CASE_INSENSITIVE_ALPHANUMERIC = "CASE_INSENSITIVE_ALPHANUMERIC"
    NUMERIC = "NUMERIC"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy:
    r"""GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy
    Sorts by dimension values.
    """
    
    dimension_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionName') }})
    order_type: Optional[GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderType') }})
    
