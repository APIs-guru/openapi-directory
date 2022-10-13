from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSchoolForSectionPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSchoolForSectionRequest:
    path_params: GetSchoolForSectionPathParams = field(default=None)
    

@dataclass
class GetSchoolForSectionResponse:
    content_type: str = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    school_response: Optional[shared.SchoolResponse] = field(default=None)
    status_code: int = field(default=None)
    
