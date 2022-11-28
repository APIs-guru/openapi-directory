from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum(str, Enum):
    POINT = "Point"
    LINE_STRING = "LineString"
    POLYGON = "Polygon"
    MULTI_POINT = "MultiPoint"
    MULTI_LINE_STRING = "MultiLineString"
    MULTI_POLYGON = "MultiPolygon"


@dataclass_json
@dataclass
class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry:
    r"""OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry
    GeoJSon geometry
    http://geojson.org/geojson-spec.html#geometry-objects
    """
    
    coordinates: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('coordinates') }})
    type: OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginProperties:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginTypeEnum(str, Enum):
    FEATURE = "Feature"


@dataclass_json
@dataclass
class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin:
    r"""OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin
    GeoJSon Feature
    https://tools.ietf.org/html/rfc7946#section-3.2
    """
    
    geometry: OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('geometry') }})
    properties: OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginProperties = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    type: OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    bbox: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bbox') }})
    centerline: Optional[OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('centerline') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
