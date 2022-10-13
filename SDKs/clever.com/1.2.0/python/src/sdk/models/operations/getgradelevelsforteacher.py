from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetGradeLevelsForTeacherPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGradeLevelsForTeacherRequest:
    path_params: GetGradeLevelsForTeacherPathParams = field(default=None)
    

@dataclass
class GetGradeLevelsForTeacherResponse:
    content_type: str = field(default=None)
    grade_levels_response: Optional[shared.GradeLevelsResponse] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    status_code: int = field(default=None)
    
