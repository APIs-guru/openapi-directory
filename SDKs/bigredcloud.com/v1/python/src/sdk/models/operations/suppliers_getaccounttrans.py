from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class SuppliersGetAccountTransPathParams:
    item_id: int = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SuppliersGetAccountTransRequest:
    path_params: SuppliersGetAccountTransPathParams = field()
    

@dataclass
class SuppliersGetAccountTransResponse:
    content_type: str = field()
    status_code: int = field()
    account_tran_dtos: Optional[List[shared.AccountTranDto]] = field(default=None)
    
