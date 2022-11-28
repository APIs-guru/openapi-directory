from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSchedulesScheduleAEfileQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    committee_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'committee_id', 'style': 'form', 'explode': True }})
    contributor_city: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'contributor_city', 'style': 'form', 'explode': True }})
    contributor_employer: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'contributor_employer', 'style': 'form', 'explode': True }})
    contributor_name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'contributor_name', 'style': 'form', 'explode': True }})
    contributor_occupation: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'contributor_occupation', 'style': 'form', 'explode': True }})
    contributor_state: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'contributor_state', 'style': 'form', 'explode': True }})
    image_number: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'image_number', 'style': 'form', 'explode': True }})
    line_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'line_number', 'style': 'form', 'explode': True }})
    max_amount: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_amount', 'style': 'form', 'explode': True }})
    max_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'max_date', 'style': 'form', 'explode': True }})
    max_image_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_image_number', 'style': 'form', 'explode': True }})
    min_amount: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_amount', 'style': 'form', 'explode': True }})
    min_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'min_date', 'style': 'form', 'explode': True }})
    min_image_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_image_number', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSchedulesScheduleAEfileRequest:
    query_params: GetSchedulesScheduleAEfileQueryParams = field()
    

@dataclass
class GetSchedulesScheduleAEfileResponse:
    content_type: str = field()
    status_code: int = field()
    schedule_a_efile_page: Optional[shared.ScheduleAEfilePage] = field(default=None)
    
