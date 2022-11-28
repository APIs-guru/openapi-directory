from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAuditPrimaryCategoryQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    primary_category_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'primary_category_id', 'style': 'form', 'explode': True }})
    primary_category_name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'primary_category_name', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAuditPrimaryCategoryRequest:
    query_params: GetAuditPrimaryCategoryQueryParams = field()
    

@dataclass
class GetAuditPrimaryCategoryResponse:
    content_type: str = field()
    status_code: int = field()
    audit_primary_category_page: Optional[shared.AuditPrimaryCategoryPage] = field(default=None)
    
