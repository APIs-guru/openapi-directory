from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPlanPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPlanQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPlanRequest:
    path_params: GetPlanPathParams = field()
    query_params: GetPlanQueryParams = field()
    

@dataclass
class GetPlanResponse:
    content_type: str = field()
    status_code: int = field()
    ee_plan_list_item: Optional[shared.EePlanListItem] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
