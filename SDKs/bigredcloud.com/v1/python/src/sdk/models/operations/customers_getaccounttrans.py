from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CustomersGetAccountTransPathParams:
    item_id: int = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CustomersGetAccountTransRequest:
    path_params: CustomersGetAccountTransPathParams = field()
    

@dataclass
class CustomersGetAccountTransResponse:
    content_type: str = field()
    status_code: int = field()
    account_tran_dtos: Optional[List[shared.AccountTranDto]] = field(default=None)
    
