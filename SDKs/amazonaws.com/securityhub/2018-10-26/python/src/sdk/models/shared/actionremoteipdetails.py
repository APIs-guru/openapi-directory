from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import city
from . import country
from . import geolocation
from . import iporganizationdetails


@dataclass_json
@dataclass
class ActionRemoteIPDetails:
    city: Optional[city.City] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'City' }})
    country: Optional[country.Country] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    geo_location: Optional[geolocation.GeoLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GeoLocation' }})
    ip_address_v4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpAddressV4' }})
    organization: Optional[iporganizationdetails.IPOrganizationDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Organization' }})
    
