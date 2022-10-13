from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetAccountTokenByCodeQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccountTokenByCodeRequest:
    query_params: GetAccountTokenByCodeQueryParams = field(default=None)
    request: shared.AccountTokenByCodeRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetAccountTokenByCodeResponse:
    access_tokens: Optional[List[shared.AccessToken]] = field(default=None)
    content_type: str = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
