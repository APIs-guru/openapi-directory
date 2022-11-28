from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class CreateProfileQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateProfileSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateProfileRequest:
    query_params: CreateProfileQueryParams = field()
    request: shared.ProfileCreationRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateProfileSecurity = field()
    

@dataclass
class CreateProfileResponse:
    content_type: str = field()
    status_code: int = field()
    profile_detail: Optional[shared.ProfileDetail] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
