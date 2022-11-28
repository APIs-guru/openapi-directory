from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MePutMePersonalRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api2_models_personal: Optional[shared.Api2ModelsPersonal] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api2_models_personal1: Optional[shared.Api2ModelsPersonal] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api2_models_personal2: Optional[shared.Api2ModelsPersonal] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class MePutMePersonalRequest:
    request: MePutMePersonalRequests = field()
    

@dataclass
class MePutMePersonalResponse:
    content_type: str = field()
    status_code: int = field()
    api2_models_big_oven_user: Optional[shared.Api2ModelsBigOvenUser] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
