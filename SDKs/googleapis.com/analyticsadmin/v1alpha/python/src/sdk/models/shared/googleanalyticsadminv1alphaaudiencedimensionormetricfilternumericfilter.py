from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnum(str, Enum):
    OPERATION_UNSPECIFIED = "OPERATION_UNSPECIFIED"
    EQUAL = "EQUAL"
    LESS_THAN = "LESS_THAN"
    GREATER_THAN = "GREATER_THAN"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter:
    r"""GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter
    A filter for numeric or date values on a dimension or metric.
    """
    
    operation: Optional[GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    value: Optional[GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
