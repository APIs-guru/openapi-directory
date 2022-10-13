from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSectionPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSectionRequest:
    path_params: GetSectionPathParams = field(default=None)
    

@dataclass
class GetSectionResponse:
    content_type: str = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    section_response: Optional[shared.SectionResponse] = field(default=None)
    status_code: int = field(default=None)
    
