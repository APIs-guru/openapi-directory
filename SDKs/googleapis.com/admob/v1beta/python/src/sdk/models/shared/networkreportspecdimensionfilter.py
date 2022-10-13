from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import stringlist

class NetworkReportSpecDimensionFilterDimensionEnum(str, Enum):
    DIMENSION_UNSPECIFIED = "DIMENSION_UNSPECIFIED"
    DATE = "DATE"
    MONTH = "MONTH"
    WEEK = "WEEK"
    AD_UNIT = "AD_UNIT"
    APP = "APP"
    AD_TYPE = "AD_TYPE"
    COUNTRY = "COUNTRY"
    FORMAT = "FORMAT"
    PLATFORM = "PLATFORM"
    MOBILE_OS_VERSION = "MOBILE_OS_VERSION"
    GMA_SDK_VERSION = "GMA_SDK_VERSION"
    APP_VERSION_NAME = "APP_VERSION_NAME"
    SERVING_RESTRICTION = "SERVING_RESTRICTION"


@dataclass_json
@dataclass
class NetworkReportSpecDimensionFilter:
    dimension: Optional[NetworkReportSpecDimensionFilterDimensionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimension' }})
    matches_any: Optional[stringlist.StringList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchesAny' }})
    
