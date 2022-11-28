from dataclasses import dataclass, field
from typing import Optional


@dataclass
class MetaGetOctocatQueryParams:
    s: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 's', 'style': 'form', 'explode': True }})
    

@dataclass
class MetaGetOctocatRequest:
    query_params: MetaGetOctocatQueryParams = field()
    

@dataclass
class MetaGetOctocatResponse:
    content_type: str = field()
    status_code: int = field()
    meta_get_octocat_200_application_octocat_stream_string: Optional[str] = field(default=None)
    
