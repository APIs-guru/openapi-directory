from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetTransactionHashReceiptPathParams:
    hash: str = field(metadata={'path_param': { 'field_name': 'hash', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransactionHashReceiptSecurity:
    key2: shared.SchemeKey2 = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTransactionHashReceiptRequest:
    path_params: GetTransactionHashReceiptPathParams = field()
    security: GetTransactionHashReceiptSecurity = field()
    

@dataclass
class GetTransactionHashReceiptResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    
