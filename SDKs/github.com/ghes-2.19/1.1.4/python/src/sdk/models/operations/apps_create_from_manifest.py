from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class AppsCreateFromManifestPathParams:
    code: str = field(metadata={'path_param': { 'field_name': 'code', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsCreateFromManifestRequest:
    path_params: AppsCreateFromManifestPathParams = field()
    request: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AppsCreateFromManifestResponse:
    content_type: str = field()
    status_code: int = field()
    git_hub_app: Optional[dict[str, Any]] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    validation_error_simple: Optional[shared.ValidationErrorSimple] = field(default=None)
    
