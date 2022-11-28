from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SeeContentBlockInformationQueryParams:
    content_block_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'content_block_id', 'style': 'form', 'explode': True }})
    include_inclusion_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'include_inclusion_data', 'style': 'form', 'explode': True }})
    

@dataclass
class SeeContentBlockInformationRequest:
    query_params: SeeContentBlockInformationQueryParams = field()
    

@dataclass
class SeeContentBlockInformationResponse:
    content_type: str = field()
    status_code: int = field()
    
