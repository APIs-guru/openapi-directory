from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ResubscribePathParams:
    platform: str = field(default=None, metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResubscribeQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    plan_id: str = field(default=None, metadata={'query_param': { 'field_name': 'planId', 'style': 'form', 'explode': True }})
    

@dataclass
class ResubscribeSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ResubscribeRequest:
    path_params: ResubscribePathParams = field(default=None)
    query_params: ResubscribeQueryParams = field(default=None)
    security: ResubscribeSecurity = field(default=None)
    

@dataclass
class ResubscribeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    resubscribe_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
