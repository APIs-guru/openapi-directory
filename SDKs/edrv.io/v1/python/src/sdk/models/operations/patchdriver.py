from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PatchDriverPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PatchDriverRequestBodyAddress:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCode' }})
    street_and_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streetAndNumber' }})
    

@dataclass_json
@dataclass
class PatchDriverRequestBodyPhone:
    home: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'home' }})
    mobile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobile' }})
    work: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'work' }})
    

@dataclass_json
@dataclass
class PatchDriverRequestBody:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    address: Optional[PatchDriverRequestBodyAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    firstname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstname' }})
    lastname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastname' }})
    phone: Optional[PatchDriverRequestBodyPhone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    tokens: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokens' }})
    

@dataclass
class PatchDriverRequest:
    path_params: PatchDriverPathParams = field(default=None)
    request: PatchDriverRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PatchDriver200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    result: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class PatchDriverResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    patch_driver_200_application_json_object: Optional[PatchDriver200ApplicationJSON] = field(default=None)
    
