from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import stringlist

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
    dimension: Optional[MediationReportSpecDimensionFilterDimensionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimension' }})
    matches_any: Optional[stringlist.StringList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchesAny' }})
    
