from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBlockHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBlockRequest:
    headers: GetBlockHeaders = field(default=None)
    request: shared.GetBlockRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetBlockResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_block: Optional[shared.GetBlock] = field(default=None)
    
