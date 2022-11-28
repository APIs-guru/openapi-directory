from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetCommunicationCostsAggregatesSupportOpposeIndicatorEnum(str, Enum):
    S = "S"
    O = "O"


@dataclass
class GetCommunicationCostsAggregatesQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    candidate_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'candidate_id', 'style': 'form', 'explode': True }})
    committee_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'committee_id', 'style': 'form', 'explode': True }})
    cycle: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'cycle', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    support_oppose_indicator: Optional[GetCommunicationCostsAggregatesSupportOpposeIndicatorEnum] = field(default=None, metadata={'query_param': { 'field_name': 'support_oppose_indicator', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCommunicationCostsAggregatesRequest:
    query_params: GetCommunicationCostsAggregatesQueryParams = field()
    

@dataclass
class GetCommunicationCostsAggregatesResponse:
    content_type: str = field()
    status_code: int = field()
    communication_cost_by_candidate_page: Optional[shared.CommunicationCostByCandidatePage] = field(default=None)
    
