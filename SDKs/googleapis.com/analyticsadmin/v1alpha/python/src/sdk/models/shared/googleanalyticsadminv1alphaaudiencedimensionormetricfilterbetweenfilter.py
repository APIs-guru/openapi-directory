from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter:
    r"""GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter
    A filter for numeric or date values between certain values on a dimension or metric.
    """
    
    from_value: Optional[GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromValue') }})
    to_value: Optional[GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toValue') }})
    
