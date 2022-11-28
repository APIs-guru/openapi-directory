from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class CashReceiptsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CashReceiptsDeleteQueryParams:
    timestamp: str = field(metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class CashReceiptsDeleteRequest:
    path_params: CashReceiptsDeletePathParams = field()
    query_params: CashReceiptsDeleteQueryParams = field()
    

@dataclass
class CashReceiptsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    cash_receipts_delete_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
