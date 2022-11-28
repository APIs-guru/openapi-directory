from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class BankAccountsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BankAccountsDeleteQueryParams:
    timestamp: str = field(metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class BankAccountsDeleteRequest:
    path_params: BankAccountsDeletePathParams = field()
    query_params: BankAccountsDeleteQueryParams = field()
    

@dataclass
class BankAccountsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    bank_accounts_delete_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
