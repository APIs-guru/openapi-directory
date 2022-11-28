from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSectionPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSectionRequest:
    path_params: GetSectionPathParams = field()
    

@dataclass
class GetSectionResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[shared.NotFound] = field(default=None)
    section_response: Optional[shared.SectionResponse] = field(default=None)
    
