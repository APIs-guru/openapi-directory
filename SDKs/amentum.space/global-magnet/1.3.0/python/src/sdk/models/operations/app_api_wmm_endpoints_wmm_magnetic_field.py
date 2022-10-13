from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class AppAPIWmmEndpointsWmmMagneticFieldQueryParams:
    altitude: float = field(default=None, metadata={'query_param': { 'field_name': 'altitude', 'style': 'form', 'explode': True }})
    latitude: float = field(default=None, metadata={'query_param': { 'field_name': 'latitude', 'style': 'form', 'explode': True }})
    longitude: float = field(default=None, metadata={'query_param': { 'field_name': 'longitude', 'style': 'form', 'explode': True }})
    year: float = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class AppAPIWmmEndpointsWmmMagneticFieldRequest:
    query_params: AppAPIWmmEndpointsWmmMagneticFieldQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONDeclination:
    units: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'units' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONGridVariation:
    units: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'units' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONInclination:
    units: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'units' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONTotalIntensity:
    units: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'units' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class AppAPIWmmEndpointsWmmMagneticField200ApplicationJSON:
    declination: Optional[AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONDeclination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'declination' }})
    grid_variation: Optional[AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONGridVariation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grid_variation' }})
    inclination: Optional[AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONInclination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inclination' }})
    total_intensity: Optional[AppAPIWmmEndpointsWmmMagneticField200ApplicationJSONTotalIntensity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_intensity' }})
    

@dataclass
class AppAPIWmmEndpointsWmmMagneticFieldResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    app_api_wmm_endpoints_wmm_magnetic_field_200_application_json_object: Optional[AppAPIWmmEndpointsWmmMagneticField200ApplicationJSON] = field(default=None)
    
