from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class OptionsTransactionHashReceiptPathParams:
    hash: str = field(metadata={'path_param': { 'field_name': 'hash', 'style': 'simple', 'explode': False }})
    

@dataclass
class OptionsTransactionHashReceiptRequest:
    path_params: OptionsTransactionHashReceiptPathParams = field()
    

@dataclass
class OptionsTransactionHashReceiptResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    
