from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetElectionsSearchOfficeEnum(str, Enum):
    HOUSE = "house"
    SENATE = "senate"
    PRESIDENT = "president"


@dataclass
class GetElectionsSearchQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    cycle: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'cycle', 'style': 'form', 'explode': True }})
    district: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'district', 'style': 'form', 'explode': True }})
    office: Optional[List[GetElectionsSearchOfficeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'office', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    state: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    zip: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'zip', 'style': 'form', 'explode': True }})
    

@dataclass
class GetElectionsSearchRequest:
    query_params: GetElectionsSearchQueryParams = field()
    

@dataclass
class GetElectionsSearchResponse:
    content_type: str = field()
    status_code: int = field()
    elections_list_page: Optional[shared.ElectionsListPage] = field(default=None)
    
