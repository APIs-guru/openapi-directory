from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetAccountTokenByCodeQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccountTokenByCodeRequest:
    query_params: GetAccountTokenByCodeQueryParams = field()
    request: shared.AccountTokenByCodeRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetAccountTokenByCodeResponse:
    content_type: str = field()
    status_code: int = field()
    access_tokens: Optional[List[shared.AccessToken]] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
