from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class BankAccountsPutPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BankAccountsPutRequest:
    path_params: BankAccountsPutPathParams = field(default=None)
    request: shared.BankAccountDto = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BankAccountsPutResponse:
    bank_accounts_put_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
