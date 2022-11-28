from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetCandidatesTotalsByOfficeOfficeEnum(str, Enum):
    UNKNOWN = ""
    H = "H"
    S = "S"
    P = "P"


@dataclass
class GetCandidatesTotalsByOfficeQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    election_year: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'election_year', 'style': 'form', 'explode': True }})
    is_active_candidate: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'is_active_candidate', 'style': 'form', 'explode': True }})
    office: Optional[GetCandidatesTotalsByOfficeOfficeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'office', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCandidatesTotalsByOfficeRequest:
    query_params: GetCandidatesTotalsByOfficeQueryParams = field()
    

@dataclass
class GetCandidatesTotalsByOfficeResponse:
    content_type: str = field()
    status_code: int = field()
    total_by_office_page: Optional[shared.TotalByOfficePage] = field(default=None)
    
