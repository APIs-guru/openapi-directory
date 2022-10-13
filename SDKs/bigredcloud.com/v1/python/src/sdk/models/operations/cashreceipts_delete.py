from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class CashReceiptsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CashReceiptsDeleteQueryParams:
    timestamp: str = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class CashReceiptsDeleteRequest:
    path_params: CashReceiptsDeletePathParams = field(default=None)
    query_params: CashReceiptsDeleteQueryParams = field(default=None)
    

@dataclass
class CashReceiptsDeleteResponse:
    cash_receipts_delete_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
