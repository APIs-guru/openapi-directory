from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetCommitteeCommitteeIDFilingsPathParams:
    committee_id: str = field(metadata={'path_param': { 'field_name': 'committee_id', 'style': 'simple', 'explode': False }})
    
class GetCommitteeCommitteeIDFilingsAmendmentIndicatorEnum(str, Enum):
    UNKNOWN = ""
    N = "N"
    A = "A"
    T = "T"
    C = "C"
    M = "M"
    S = "S"

class GetCommitteeCommitteeIDFilingsFilerTypeEnum(str, Enum):
    E_FILE = "e-file"
    PAPER = "paper"

class GetCommitteeCommitteeIDFilingsOfficeEnum(str, Enum):
    UNKNOWN = ""
    H = "H"
    S = "S"
    P = "P"


@dataclass
class GetCommitteeCommitteeIDFilingsQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    amendment_indicator: Optional[List[GetCommitteeCommitteeIDFilingsAmendmentIndicatorEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'amendment_indicator', 'style': 'form', 'explode': True }})
    beginning_image_number: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'beginning_image_number', 'style': 'form', 'explode': True }})
    committee_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'committee_type', 'style': 'form', 'explode': True }})
    cycle: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'cycle', 'style': 'form', 'explode': True }})
    district: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'district', 'style': 'form', 'explode': True }})
    document_type: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'document_type', 'style': 'form', 'explode': True }})
    file_number: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'file_number', 'style': 'form', 'explode': True }})
    filer_type: Optional[GetCommitteeCommitteeIDFilingsFilerTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filer_type', 'style': 'form', 'explode': True }})
    form_category: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'form_category', 'style': 'form', 'explode': True }})
    form_type: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'form_type', 'style': 'form', 'explode': True }})
    is_amended: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'is_amended', 'style': 'form', 'explode': True }})
    max_receipt_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'max_receipt_date', 'style': 'form', 'explode': True }})
    min_receipt_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'min_receipt_date', 'style': 'form', 'explode': True }})
    most_recent: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'most_recent', 'style': 'form', 'explode': True }})
    office: Optional[List[GetCommitteeCommitteeIDFilingsOfficeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'office', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    party: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'party', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    primary_general_indicator: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'primary_general_indicator', 'style': 'form', 'explode': True }})
    report_type: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'report_type', 'style': 'form', 'explode': True }})
    report_year: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'report_year', 'style': 'form', 'explode': True }})
    request_type: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'request_type', 'style': 'form', 'explode': True }})
    sort: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    state: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCommitteeCommitteeIDFilingsRequest:
    path_params: GetCommitteeCommitteeIDFilingsPathParams = field()
    query_params: GetCommitteeCommitteeIDFilingsQueryParams = field()
    

@dataclass
class GetCommitteeCommitteeIDFilingsResponse:
    content_type: str = field()
    status_code: int = field()
    filings_page: Optional[shared.FilingsPage] = field(default=None)
    
