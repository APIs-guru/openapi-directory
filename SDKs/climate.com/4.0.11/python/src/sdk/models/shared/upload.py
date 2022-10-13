from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json

class UploadContentTypeEnum(str, Enum):
    APPLICATION_VND_CLIMATE_FIELD_GEOJSON = "application/vnd.climate.field.geojson"
    IMAGE_VND_CLIMATE_THERMAL_GEOTIFF = "image/vnd.climate.thermal.geotiff"
    IMAGE_VND_CLIMATE_NDVI_GEOTIFF = "image/vnd.climate.ndvi.geotiff"
    IMAGE_VND_CLIMATE_WATERSTRESS_GEOTIFF = "image/vnd.climate.waterstress.geotiff"
    IMAGE_VND_CLIMATE_ELEVATION_GEOTIFF = "image/vnd.climate.elevation.geotiff"
    IMAGE_VND_CLIMATE_RAW_GEOTIFF = "image/vnd.climate.raw.geotiff"
    IMAGE_VND_CLIMATE_RGB_GEOTIFF = "image/vnd.climate.rgb.geotiff"


@dataclass_json
@dataclass
class Upload:
    content_type: UploadContentTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentType' }})
    length: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'length' }})
    md5: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'md5' }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    
