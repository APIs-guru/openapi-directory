from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import _1track_get_responses_200_content_application_1json_schema_properties_origin_properties_geometry

class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum(str, Enum):
    POINT = "Point"
    LINE_STRING = "LineString"
    POLYGON = "Polygon"
    MULTI_POINT = "MultiPoint"
    MULTI_LINE_STRING = "MultiLineString"
    MULTI_POLYGON = "MultiPolygon"


@dataclass_json
@dataclass
class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryGeometry:
    coordinates: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coordinates' }})
    type: OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginProperties:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginTypeEnum(str, Enum):
    FEATURE = "Feature"


@dataclass_json
@dataclass
class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin:
    bbox: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bbox' }})
    centerline: Optional[_1track_get_responses_200_content_application_1json_schema_properties_origin_properties_geometry.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'centerline' }})
    geometry: OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryGeometry = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geometry' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    properties: OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginProperties = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
