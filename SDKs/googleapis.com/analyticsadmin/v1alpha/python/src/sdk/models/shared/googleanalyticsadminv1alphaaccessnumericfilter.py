from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnum(str, Enum):
    OPERATION_UNSPECIFIED = "OPERATION_UNSPECIFIED"
    EQUAL = "EQUAL"
    LESS_THAN = "LESS_THAN"
    LESS_THAN_OR_EQUAL = "LESS_THAN_OR_EQUAL"
    GREATER_THAN = "GREATER_THAN"
    GREATER_THAN_OR_EQUAL = "GREATER_THAN_OR_EQUAL"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAccessNumericFilter:
    r"""GoogleAnalyticsAdminV1alphaAccessNumericFilter
    Filters for numeric or date values.
    """
    
    operation: Optional[GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    value: Optional[GoogleAnalyticsAdminV1alphaNumericValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
