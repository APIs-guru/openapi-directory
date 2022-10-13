from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRadAnalystQueryParams:
    analyst_id: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'analyst_id', 'style': 'form', 'explode': True }})
    analyst_short_id: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'analyst_short_id', 'style': 'form', 'explode': True }})
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    committee_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'committee_id', 'style': 'form', 'explode': True }})
    email: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    max_assignment_update_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'max_assignment_update_date', 'style': 'form', 'explode': True }})
    min_assignment_update_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'min_assignment_update_date', 'style': 'form', 'explode': True }})
    name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    telephone_ext: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'telephone_ext', 'style': 'form', 'explode': True }})
    title: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'title', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRadAnalystRequest:
    query_params: GetRadAnalystQueryParams = field(default=None)
    

@dataclass
class GetRadAnalystResponse:
    content_type: str = field(default=None)
    rad_analyst_page: Optional[shared.RadAnalystPage] = field(default=None)
    status_code: int = field(default=None)
    
