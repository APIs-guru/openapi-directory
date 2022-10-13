from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GistsCheckIsStarredPathParams:
    gist_id: str = field(default=None, metadata={'path_param': { 'field_name': 'gist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GistsCheckIsStarredRequest:
    path_params: GistsCheckIsStarredPathParams = field(default=None)
    

@dataclass
class GistsCheckIsStarredResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    gists_check_is_starred_404_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
