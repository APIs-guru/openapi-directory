from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from sdk.models import shared

class GetOperationsLogStatusNumEnum(str, Enum):
    ZERO = "0"
    ONE = "1"


@dataclass
class GetOperationsLogQueryParams:
    amendment_indicator: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'amendment_indicator', 'style': 'form', 'explode': True }})
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    beginning_image_number: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'beginning_image_number', 'style': 'form', 'explode': True }})
    candidate_committee_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'candidate_committee_id', 'style': 'form', 'explode': True }})
    form_type: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'form_type', 'style': 'form', 'explode': True }})
    max_coverage_end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'max_coverage_end_date', 'style': 'form', 'explode': True }})
    max_receipt_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'max_receipt_date', 'style': 'form', 'explode': True }})
    max_transaction_data_complete_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'max_transaction_data_complete_date', 'style': 'form', 'explode': True }})
    min_coverage_end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'min_coverage_end_date', 'style': 'form', 'explode': True }})
    min_receipt_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'min_receipt_date', 'style': 'form', 'explode': True }})
    min_transaction_data_complete_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'min_transaction_data_complete_date', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    report_type: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'report_type', 'style': 'form', 'explode': True }})
    report_year: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'report_year', 'style': 'form', 'explode': True }})
    sort: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    status_num: Optional[List[GetOperationsLogStatusNumEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'status_num', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOperationsLogRequest:
    query_params: GetOperationsLogQueryParams = field(default=None)
    

@dataclass
class GetOperationsLogResponse:
    content_type: str = field(default=None)
    operations_log_page: Optional[shared.OperationsLogPage] = field(default=None)
    status_code: int = field(default=None)
    
