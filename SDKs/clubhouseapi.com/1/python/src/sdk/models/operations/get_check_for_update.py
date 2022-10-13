from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetCheckForUpdateQueryParams:
    is_testflight: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'is_testflight', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCheckForUpdateRequest:
    query_params: GetCheckForUpdateQueryParams = field(default=None)
    

@dataclass
class GetCheckForUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
