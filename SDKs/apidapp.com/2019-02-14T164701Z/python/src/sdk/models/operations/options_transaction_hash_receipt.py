from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class OptionsTransactionHashReceiptPathParams:
    hash: str = field(default=None, metadata={'path_param': { 'field_name': 'hash', 'style': 'simple', 'explode': False }})
    

@dataclass
class OptionsTransactionHashReceiptRequest:
    path_params: OptionsTransactionHashReceiptPathParams = field(default=None)
    

@dataclass
class OptionsTransactionHashReceiptResponse:
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
