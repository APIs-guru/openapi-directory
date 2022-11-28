from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPlanByTokenPathParams:
    token: str = field(metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPlanByTokenQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPlanByTokenRequest:
    path_params: GetPlanByTokenPathParams = field()
    query_params: GetPlanByTokenQueryParams = field()
    

@dataclass
class GetPlanByTokenResponse:
    content_type: str = field()
    status_code: int = field()
    bt_plan_list_item: Optional[shared.BtPlanListItem] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
