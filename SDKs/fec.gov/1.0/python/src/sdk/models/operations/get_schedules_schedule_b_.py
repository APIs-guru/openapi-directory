from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from sdk.models import shared

class GetSchedulesScheduleBSpenderCommitteeDesignationEnum(str, Enum):
    UNKNOWN = ""
    A = "A"
    J = "J"
    P = "P"
    U = "U"
    B = "B"
    D = "D"

class GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum(str, Enum):
    UNKNOWN = ""
    C = "C"
    L = "L"
    M = "M"
    T = "T"
    V = "V"
    W = "W"

class GetSchedulesScheduleBSpenderCommitteeTypeEnum(str, Enum):
    UNKNOWN = ""
    C = "C"
    D = "D"
    E = "E"
    H = "H"
    I = "I"
    N = "N"
    O = "O"
    P = "P"
    Q = "Q"
    S = "S"
    U = "U"
    V = "V"
    W = "W"
    X = "X"
    Y = "Y"
    Z = "Z"


@dataclass
class GetSchedulesScheduleBQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    committee_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'committee_id', 'style': 'form', 'explode': True }})
    disbursement_description: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'disbursement_description', 'style': 'form', 'explode': True }})
    disbursement_purpose_category: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'disbursement_purpose_category', 'style': 'form', 'explode': True }})
    image_number: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'image_number', 'style': 'form', 'explode': True }})
    last_disbursement_amount: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'last_disbursement_amount', 'style': 'form', 'explode': True }})
    last_disbursement_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'last_disbursement_date', 'style': 'form', 'explode': True }})
    last_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'last_index', 'style': 'form', 'explode': True }})
    line_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'line_number', 'style': 'form', 'explode': True }})
    max_amount: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_amount', 'style': 'form', 'explode': True }})
    max_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'max_date', 'style': 'form', 'explode': True }})
    max_image_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_image_number', 'style': 'form', 'explode': True }})
    min_amount: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_amount', 'style': 'form', 'explode': True }})
    min_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'min_date', 'style': 'form', 'explode': True }})
    min_image_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_image_number', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    recipient_city: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'recipient_city', 'style': 'form', 'explode': True }})
    recipient_committee_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'recipient_committee_id', 'style': 'form', 'explode': True }})
    recipient_name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'recipient_name', 'style': 'form', 'explode': True }})
    recipient_state: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'recipient_state', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    spender_committee_designation: Optional[List[GetSchedulesScheduleBSpenderCommitteeDesignationEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'spender_committee_designation', 'style': 'form', 'explode': True }})
    spender_committee_org_type: Optional[List[GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'spender_committee_org_type', 'style': 'form', 'explode': True }})
    spender_committee_type: Optional[List[GetSchedulesScheduleBSpenderCommitteeTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'spender_committee_type', 'style': 'form', 'explode': True }})
    two_year_transaction_period: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'two_year_transaction_period', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSchedulesScheduleBRequest:
    query_params: GetSchedulesScheduleBQueryParams = field(default=None)
    

@dataclass
class GetSchedulesScheduleBResponse:
    content_type: str = field(default=None)
    schedule_b_page: Optional[shared.ScheduleBPage] = field(default=None)
    status_code: int = field(default=None)
    
