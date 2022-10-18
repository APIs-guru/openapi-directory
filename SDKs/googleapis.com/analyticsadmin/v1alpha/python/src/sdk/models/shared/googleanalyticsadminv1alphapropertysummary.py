from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleAnalyticsAdminV1alphaPropertySummaryPropertyTypeEnum(str, Enum):
    PROPERTY_TYPE_UNSPECIFIED = "PROPERTY_TYPE_UNSPECIFIED"
    PROPERTY_TYPE_ORDINARY = "PROPERTY_TYPE_ORDINARY"
    PROPERTY_TYPE_SUBPROPERTY = "PROPERTY_TYPE_SUBPROPERTY"
    PROPERTY_TYPE_ROLLUP = "PROPERTY_TYPE_ROLLUP"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaPropertySummary:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    property: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'property' }})
    property_type: Optional[GoogleAnalyticsAdminV1alphaPropertySummaryPropertyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propertyType' }})
    
