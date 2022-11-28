from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class BankAccountsPutPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BankAccountsPutRequest:
    path_params: BankAccountsPutPathParams = field()
    request: shared.BankAccountDto = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BankAccountsPutResponse:
    content_type: str = field()
    status_code: int = field()
    bank_accounts_put_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
