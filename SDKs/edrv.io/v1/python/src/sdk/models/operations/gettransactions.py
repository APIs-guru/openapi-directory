from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class GetTransactionsStatusEnum(str, Enum):
    STARTED = "Started"
    ENDED = "Ended"


@dataclass
class GetTransactionsQueryParams:
    created_at_dollar_gte_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'createdAt[$gte]', 'style': 'form', 'explode': True }})
    created_at_dollar_lte_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'createdAt[$lte]', 'style': 'form', 'explode': True }})
    include_chargestation: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_chargestation', 'style': 'form', 'explode': True }})
    include_connector: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_connector', 'style': 'form', 'explode': True }})
    include_driver: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_driver', 'style': 'form', 'explode': True }})
    include_evse: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_evse', 'style': 'form', 'explode': True }})
    include_organization: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_organization', 'style': 'form', 'explode': True }})
    include_rate: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_rate', 'style': 'form', 'explode': True }})
    include_reservation: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_reservation', 'style': 'form', 'explode': True }})
    include_token: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_token', 'style': 'form', 'explode': True }})
    paginate_enabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'paginate_enabled', 'style': 'form', 'explode': True }})
    paginate_limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'paginate_limit', 'style': 'form', 'explode': True }})
    paginate_page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'paginate_page', 'style': 'form', 'explode': True }})
    sort_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    sort_order: Optional[shared.SortOrder1Enum] = field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    status: Optional[GetTransactionsStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    updated_at_dollar_gte_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'updatedAt[$gte]', 'style': 'form', 'explode': True }})
    updated_at_dollar_lte_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'updatedAt[$lte]', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTransactionsRequest:
    query_params: GetTransactionsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetTransactions200ApplicationJSON:
    has_next: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasNext' }})
    has_previous: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasPrevious' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    result: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class GetTransactionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_transactions_200_application_json_object: Optional[GetTransactions200ApplicationJSON] = field(default=None)
    
