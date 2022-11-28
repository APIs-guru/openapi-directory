from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEfileReportsPacPartyQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    committee_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'committee_id', 'style': 'form', 'explode': True }})
    file_number: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'file_number', 'style': 'form', 'explode': True }})
    max_receipt_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'max_receipt_date', 'style': 'form', 'explode': True }})
    min_receipt_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'min_receipt_date', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEfileReportsPacPartyRequest:
    query_params: GetEfileReportsPacPartyQueryParams = field()
    

@dataclass
class GetEfileReportsPacPartyResponse:
    content_type: str = field()
    status_code: int = field()
    base_f3_x_filing_page: Optional[shared.BaseF3XFilingPage] = field(default=None)
    
