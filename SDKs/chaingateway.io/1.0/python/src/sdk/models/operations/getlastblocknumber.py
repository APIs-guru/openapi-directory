from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLastBlockNumberHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: str = field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLastBlockNumberRequest:
    headers: GetLastBlockNumberHeaders = field()
    

@dataclass
class GetLastBlockNumberResponse:
    content_type: str = field()
    status_code: int = field()
    get_last_block_number: Optional[shared.GetLastBlockNumber] = field(default=None)
    
