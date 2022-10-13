from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CustomersGetAccountTransPathParams:
    item_id: int = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CustomersGetAccountTransRequest:
    path_params: CustomersGetAccountTransPathParams = field(default=None)
    

@dataclass
class CustomersGetAccountTransResponse:
    account_tran_dtos: Optional[List[shared.AccountTranDto]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
