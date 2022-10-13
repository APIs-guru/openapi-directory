from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class BankAccountsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BankAccountsDeleteQueryParams:
    timestamp: str = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class BankAccountsDeleteRequest:
    path_params: BankAccountsDeletePathParams = field(default=None)
    query_params: BankAccountsDeleteQueryParams = field(default=None)
    

@dataclass
class BankAccountsDeleteResponse:
    bank_accounts_delete_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
