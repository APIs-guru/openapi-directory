from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AppsListAccountsForPlanStubbedPathParams:
    plan_id: int = field(metadata={'path_param': { 'field_name': 'plan_id', 'style': 'simple', 'explode': False }})
    
class AppsListAccountsForPlanStubbedDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclass
class AppsListAccountsForPlanStubbedQueryParams:
    direction: Optional[AppsListAccountsForPlanStubbedDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[shared.SortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class AppsListAccountsForPlanStubbedRequest:
    path_params: AppsListAccountsForPlanStubbedPathParams = field()
    query_params: AppsListAccountsForPlanStubbedQueryParams = field()
    

@dataclass
class AppsListAccountsForPlanStubbedResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    marketplace_purchases: Optional[List[shared.MarketplacePurchase]] = field(default=None)
    
