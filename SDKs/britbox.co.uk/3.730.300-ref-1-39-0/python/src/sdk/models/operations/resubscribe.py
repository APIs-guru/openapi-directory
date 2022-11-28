from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ResubscribePathParams:
    platform: str = field(metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResubscribeQueryParams:
    plan_id: str = field(metadata={'query_param': { 'field_name': 'planId', 'style': 'form', 'explode': True }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class ResubscribeSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ResubscribeRequest:
    path_params: ResubscribePathParams = field()
    query_params: ResubscribeQueryParams = field()
    security: ResubscribeSecurity = field()
    

@dataclass
class ResubscribeResponse:
    content_type: str = field()
    status_code: int = field()
    resubscribe_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
