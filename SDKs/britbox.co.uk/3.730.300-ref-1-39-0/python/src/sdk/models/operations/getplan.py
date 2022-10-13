from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPlanPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPlanQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPlanRequest:
    path_params: GetPlanPathParams = field(default=None)
    query_params: GetPlanQueryParams = field(default=None)
    

@dataclass
class GetPlanResponse:
    content_type: str = field(default=None)
    ee_plan_list_item: Optional[shared.EePlanListItem] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
