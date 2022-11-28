from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBlockHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBlockRequest:
    headers: GetBlockHeaders = field()
    request: shared.GetBlockRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetBlockResponse:
    content_type: str = field()
    status_code: int = field()
    get_block: Optional[shared.GetBlock] = field(default=None)
    
