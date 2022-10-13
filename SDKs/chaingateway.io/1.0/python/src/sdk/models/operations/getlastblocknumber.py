from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLastBlockNumberHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': True }})
    content_type: str = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': True }})
    

@dataclass
class GetLastBlockNumberRequest:
    headers: GetLastBlockNumberHeaders = field(default=None)
    

@dataclass
class GetLastBlockNumberResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_last_block_number: Optional[shared.GetLastBlockNumber] = field(default=None)
    
