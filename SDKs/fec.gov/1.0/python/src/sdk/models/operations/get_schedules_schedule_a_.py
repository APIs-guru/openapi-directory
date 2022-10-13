from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from sdk.models import shared

class GetSchedulesScheduleAContributorTypeEnum(str, Enum):
    INDIVIDUAL = "individual"
    COMMITTEE = "committee"

class GetSchedulesScheduleARecipientCommitteeDesignationEnum(str, Enum):
    UNKNOWN = ""
    A = "A"
    J = "J"
    P = "P"
    U = "U"
    B = "B"
    D = "D"

class GetSchedulesScheduleARecipientCommitteeOrgTypeEnum(str, Enum):
    UNKNOWN = ""
    C = "C"
    L = "L"
    M = "M"
    T = "T"
    V = "V"
    W = "W"

class GetSchedulesScheduleARecipientCommitteeTypeEnum(str, Enum):
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
class GetSchedulesScheduleAQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    committee_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'committee_id', 'style': 'form', 'explode': True }})
    contributor_city: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'contributor_city', 'style': 'form', 'explode': True }})
    contributor_employer: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'contributor_employer', 'style': 'form', 'explode': True }})
    contributor_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'contributor_id', 'style': 'form', 'explode': True }})
    contributor_name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'contributor_name', 'style': 'form', 'explode': True }})
    contributor_occupation: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'contributor_occupation', 'style': 'form', 'explode': True }})
    contributor_state: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'contributor_state', 'style': 'form', 'explode': True }})
    contributor_type: Optional[List[GetSchedulesScheduleAContributorTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'contributor_type', 'style': 'form', 'explode': True }})
    contributor_zip: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'contributor_zip', 'style': 'form', 'explode': True }})
    image_number: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'image_number', 'style': 'form', 'explode': True }})
    is_individual: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'is_individual', 'style': 'form', 'explode': True }})
    last_contribution_receipt_amount: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'last_contribution_receipt_amount', 'style': 'form', 'explode': True }})
    last_contribution_receipt_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'last_contribution_receipt_date', 'style': 'form', 'explode': True }})
    last_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'last_index', 'style': 'form', 'explode': True }})
    line_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'line_number', 'style': 'form', 'explode': True }})
    max_amount: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_amount', 'style': 'form', 'explode': True }})
    max_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'max_date', 'style': 'form', 'explode': True }})
    max_image_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_image_number', 'style': 'form', 'explode': True }})
    max_load_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'max_load_date', 'style': 'form', 'explode': True }})
    min_amount: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_amount', 'style': 'form', 'explode': True }})
    min_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'min_date', 'style': 'form', 'explode': True }})
    min_image_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_image_number', 'style': 'form', 'explode': True }})
    min_load_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'min_load_date', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    recipient_committee_designation: Optional[List[GetSchedulesScheduleARecipientCommitteeDesignationEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'recipient_committee_designation', 'style': 'form', 'explode': True }})
    recipient_committee_org_type: Optional[List[GetSchedulesScheduleARecipientCommitteeOrgTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'recipient_committee_org_type', 'style': 'form', 'explode': True }})
    recipient_committee_type: Optional[List[GetSchedulesScheduleARecipientCommitteeTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'recipient_committee_type', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    two_year_transaction_period: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'two_year_transaction_period', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSchedulesScheduleARequest:
    query_params: GetSchedulesScheduleAQueryParams = field(default=None)
    

@dataclass
class GetSchedulesScheduleAResponse:
    content_type: str = field(default=None)
    schedule_a_page: Optional[shared.ScheduleAPage] = field(default=None)
    status_code: int = field(default=None)
    
