from dataclasses import dataclass, field
from typing import Any,Enum
from dataclasses_json import dataclass_json

class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometryTypeEnum(str, Enum):
    POINT = "Point"
    LINE_STRING = "LineString"
    POLYGON = "Polygon"
    MULTI_POINT = "MultiPoint"
    MULTI_LINE_STRING = "MultiLineString"
    MULTI_POLYGON = "MultiPolygon"


@dataclass_json
@dataclass
class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry:
    coordinates: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coordinates' }})
    type: OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometryTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
