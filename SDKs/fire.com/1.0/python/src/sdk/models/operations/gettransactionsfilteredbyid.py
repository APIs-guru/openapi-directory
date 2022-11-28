from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTransactionsFilteredByIDPathParams:
    ican: int = field(metadata={'path_param': { 'field_name': 'ican', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransactionsFilteredByIDQueryParams:
    date_range_from: float = field(metadata={'query_param': { 'field_name': 'dateRangeFrom', 'style': 'form', 'explode': True }})
    date_range_to: float = field(metadata={'query_param': { 'field_name': 'dateRangeTo', 'style': 'form', 'explode': True }})
    search_keyword: str = field(metadata={'query_param': { 'field_name': 'searchKeyword', 'style': 'form', 'explode': True }})
    transaction_types: List[str] = field(metadata={'query_param': { 'field_name': 'transactionTypes', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTransactionsFilteredByIDRequest:
    path_params: GetTransactionsFilteredByIDPathParams = field()
    query_params: GetTransactionsFilteredByIDQueryParams = field()
    

@dataclass
class GetTransactionsFilteredByIDResponse:
    content_type: str = field()
    status_code: int = field()
    oneaccounts_1_percent_7_bican_percent_7_d_1transactions_get_responses_200_content_application_1json_schema: Optional[shared.Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema] = field(default=None)
    
