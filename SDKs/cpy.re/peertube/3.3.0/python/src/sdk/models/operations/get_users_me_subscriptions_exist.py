from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetUsersMeSubscriptionsExistQueryParams:
    uris: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'uris', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersMeSubscriptionsExistSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUsersMeSubscriptionsExistRequest:
    query_params: GetUsersMeSubscriptionsExistQueryParams = field(default=None)
    security: GetUsersMeSubscriptionsExistSecurity = field(default=None)
    

@dataclass
class GetUsersMeSubscriptionsExistResponse:
    content_type: str = field(default=None)
    get_users_me_subscriptions_exist_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
