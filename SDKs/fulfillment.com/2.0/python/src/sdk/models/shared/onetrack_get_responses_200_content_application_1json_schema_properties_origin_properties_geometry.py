from dataclasses import dataclass, field
from typing import Any
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry
    GeoJSon geometry
    http://geojson.org/geojson-spec.html#geometry-objects
    """
    
    coordinates: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('coordinates') }})
    type: OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometryTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
