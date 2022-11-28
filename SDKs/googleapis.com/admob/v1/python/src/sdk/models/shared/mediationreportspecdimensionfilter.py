from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class MediationReportSpecDimensionFilterDimensionEnum(str, Enum):
    DIMENSION_UNSPECIFIED = "DIMENSION_UNSPECIFIED"
    DATE = "DATE"
    MONTH = "MONTH"
    WEEK = "WEEK"
    AD_SOURCE = "AD_SOURCE"
    AD_SOURCE_INSTANCE = "AD_SOURCE_INSTANCE"
    AD_UNIT = "AD_UNIT"
    APP = "APP"
    MEDIATION_GROUP = "MEDIATION_GROUP"
    COUNTRY = "COUNTRY"
    FORMAT = "FORMAT"
    PLATFORM = "PLATFORM"
    MOBILE_OS_VERSION = "MOBILE_OS_VERSION"
    GMA_SDK_VERSION = "GMA_SDK_VERSION"
    APP_VERSION_NAME = "APP_VERSION_NAME"
    SERVING_RESTRICTION = "SERVING_RESTRICTION"


@dataclass_json
@dataclass
class MediationReportSpecDimensionFilter:
    r"""MediationReportSpecDimensionFilter
    Describes which report rows to match based on their dimension values.
    """
    
    dimension: Optional[MediationReportSpecDimensionFilterDimensionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimension') }})
    matches_any: Optional[StringList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchesAny') }})
    
