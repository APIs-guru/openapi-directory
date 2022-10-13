from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MePutMeRequests:
    api2_models_big_oven_user: Optional[shared.Api2ModelsBigOvenUser] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api2_models_big_oven_user1: Optional[shared.Api2ModelsBigOvenUser] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api2_models_big_oven_user2: Optional[shared.Api2ModelsBigOvenUser] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class MePutMeRequest:
    request: MePutMeRequests = field(default=None)
    

@dataclass
class MePutMeResponse:
    api2_models_big_oven_user: Optional[shared.Api2ModelsBigOvenUser] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
