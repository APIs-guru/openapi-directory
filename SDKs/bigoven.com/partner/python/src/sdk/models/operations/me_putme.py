from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MePutMeRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api2_models_big_oven_user: Optional[shared.Api2ModelsBigOvenUser] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api2_models_big_oven_user1: Optional[shared.Api2ModelsBigOvenUser] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api2_models_big_oven_user2: Optional[shared.Api2ModelsBigOvenUser] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class MePutMeRequest:
    request: MePutMeRequests = field()
    

@dataclass
class MePutMeResponse:
    content_type: str = field()
    status_code: int = field()
    api2_models_big_oven_user: Optional[shared.Api2ModelsBigOvenUser] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
