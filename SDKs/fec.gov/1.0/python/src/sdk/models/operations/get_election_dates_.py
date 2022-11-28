from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class GetElectionDatesOfficeSoughtEnum(str, Enum):
    H = "H"
    S = "S"
    P = "P"


@dataclass
class GetElectionDatesQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    election_district: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'election_district', 'style': 'form', 'explode': True }})
    election_party: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'election_party', 'style': 'form', 'explode': True }})
    election_state: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'election_state', 'style': 'form', 'explode': True }})
    election_type_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'election_type_id', 'style': 'form', 'explode': True }})
    election_year: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'election_year', 'style': 'form', 'explode': True }})
    max_create_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'max_create_date', 'style': 'form', 'explode': True }})
    max_election_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'max_election_date', 'style': 'form', 'explode': True }})
    max_primary_general_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'max_primary_general_date', 'style': 'form', 'explode': True }})
    max_update_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'max_update_date', 'style': 'form', 'explode': True }})
    min_create_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'min_create_date', 'style': 'form', 'explode': True }})
    min_election_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'min_election_date', 'style': 'form', 'explode': True }})
    min_primary_general_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'min_primary_general_date', 'style': 'form', 'explode': True }})
    min_update_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'min_update_date', 'style': 'form', 'explode': True }})
    office_sought: Optional[List[GetElectionDatesOfficeSoughtEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'office_sought', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetElectionDatesDefaultApplicationJSON:
    pagination: Optional[shared.OffsetInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    results: Optional[List[shared.ElectionDate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass
class GetElectionDatesRequest:
    query_params: GetElectionDatesQueryParams = field()
    

@dataclass
class GetElectionDatesResponse:
    content_type: str = field()
    status_code: int = field()
    get_election_dates_default_application_json_object: Optional[GetElectionDatesDefaultApplicationJSON] = field(default=None)
    
