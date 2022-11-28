from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetUsersMeSubscriptionsExistQueryParams:
    uris: List[str] = field(metadata={'query_param': { 'field_name': 'uris', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersMeSubscriptionsExistSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUsersMeSubscriptionsExistRequest:
    query_params: GetUsersMeSubscriptionsExistQueryParams = field()
    security: GetUsersMeSubscriptionsExistSecurity = field()
    

@dataclass
class GetUsersMeSubscriptionsExistResponse:
    content_type: str = field()
    status_code: int = field()
    get_users_me_subscriptions_exist_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
