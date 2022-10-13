from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutMeProfileRequests:
    api2_models_profile: Optional[shared.Api2ModelsProfile] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api2_models_profile1: Optional[shared.Api2ModelsProfile] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api2_models_profile2: Optional[shared.Api2ModelsProfile] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class PutMeProfileRequest:
    request: PutMeProfileRequests = field(default=None)
    

@dataclass
class PutMeProfileResponse:
    api2_models_big_oven_user: Optional[shared.Api2ModelsBigOvenUser] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
