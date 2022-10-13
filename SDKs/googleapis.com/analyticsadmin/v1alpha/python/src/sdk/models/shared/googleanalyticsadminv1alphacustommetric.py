from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum(str, Enum):
    MEASUREMENT_UNIT_UNSPECIFIED = "MEASUREMENT_UNIT_UNSPECIFIED"
    STANDARD = "STANDARD"
    CURRENCY = "CURRENCY"
    FEET = "FEET"
    METERS = "METERS"
    KILOMETERS = "KILOMETERS"
    MILES = "MILES"
    MILLISECONDS = "MILLISECONDS"
    SECONDS = "SECONDS"
    MINUTES = "MINUTES"
    HOURS = "HOURS"

class GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum(str, Enum):
    RESTRICTED_METRIC_TYPE_UNSPECIFIED = "RESTRICTED_METRIC_TYPE_UNSPECIFIED"
    COST_DATA = "COST_DATA"
    REVENUE_DATA = "REVENUE_DATA"

class GoogleAnalyticsAdminV1alphaCustomMetricScopeEnum(str, Enum):
    METRIC_SCOPE_UNSPECIFIED = "METRIC_SCOPE_UNSPECIFIED"
    EVENT = "EVENT"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaCustomMetric:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    measurement_unit: Optional[GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'measurementUnit' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parameter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameterName' }})
    restricted_metric_type: Optional[List[GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictedMetricType' }})
    scope: Optional[GoogleAnalyticsAdminV1alphaCustomMetricScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    
