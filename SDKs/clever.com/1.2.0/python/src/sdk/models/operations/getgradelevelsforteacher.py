from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetGradeLevelsForTeacherPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGradeLevelsForTeacherRequest:
    path_params: GetGradeLevelsForTeacherPathParams = field()
    

@dataclass
class GetGradeLevelsForTeacherResponse:
    content_type: str = field()
    status_code: int = field()
    grade_levels_response: Optional[shared.GradeLevelsResponse] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    
