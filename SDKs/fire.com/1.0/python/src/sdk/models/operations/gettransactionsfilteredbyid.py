from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTransactionsFilteredByIDPathParams:
    ican: int = field(default=None, metadata={'path_param': { 'field_name': 'ican', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransactionsFilteredByIDQueryParams:
    date_range_from: float = field(default=None, metadata={'query_param': { 'field_name': 'dateRangeFrom', 'style': 'form', 'explode': True }})
    date_range_to: float = field(default=None, metadata={'query_param': { 'field_name': 'dateRangeTo', 'style': 'form', 'explode': True }})
    search_keyword: str = field(default=None, metadata={'query_param': { 'field_name': 'searchKeyword', 'style': 'form', 'explode': True }})
    transaction_types: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'transactionTypes', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTransactionsFilteredByIDRequest:
    path_params: GetTransactionsFilteredByIDPathParams = field(default=None)
    query_params: GetTransactionsFilteredByIDQueryParams = field(default=None)
    

@dataclass
class GetTransactionsFilteredByIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    oneaccounts_1_percent_7_bican_percent_7_d_1transactions_get_responses_200_content_application_1json_schema: Optional[shared.Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema] = field(default=None)
    
