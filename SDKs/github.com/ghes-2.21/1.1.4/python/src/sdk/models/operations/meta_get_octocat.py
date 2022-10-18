from dataclasses import dataclass, field
from typing import Optional


@dataclass
class MetaGetOctocatQueryParams:
    s: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 's', 'style': 'form', 'explode': True }})
    

@dataclass
class MetaGetOctocatRequest:
    query_params: MetaGetOctocatQueryParams = field(default=None)
    

@dataclass
class MetaGetOctocatResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
