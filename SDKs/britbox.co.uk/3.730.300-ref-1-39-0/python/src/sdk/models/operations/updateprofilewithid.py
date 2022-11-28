from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class UpdateProfileWithIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateProfileWithIDQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateProfileWithIDSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateProfileWithIDRequest:
    path_params: UpdateProfileWithIDPathParams = field()
    query_params: UpdateProfileWithIDQueryParams = field()
    request: shared.ProfileUpdateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateProfileWithIDSecurity = field()
    

@dataclass
class UpdateProfileWithIDResponse:
    content_type: str = field()
    status_code: int = field()
    service_error: Optional[shared.ServiceError] = field(default=None)
    
