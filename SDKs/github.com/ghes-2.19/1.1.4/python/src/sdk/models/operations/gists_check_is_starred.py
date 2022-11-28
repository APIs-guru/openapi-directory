from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GistsCheckIsStarredPathParams:
    gist_id: str = field(metadata={'path_param': { 'field_name': 'gist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GistsCheckIsStarredRequest:
    path_params: GistsCheckIsStarredPathParams = field()
    

@dataclass
class GistsCheckIsStarredResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    gists_check_is_starred_404_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
