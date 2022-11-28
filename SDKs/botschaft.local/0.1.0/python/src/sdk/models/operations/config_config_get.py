from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConfigConfigGetHeaders:
    authorization: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConfigConfigGetRequest:
    headers: ConfigConfigGetHeaders = field()
    

@dataclass
class ConfigConfigGetResponse:
    content_type: str = field()
    status_code: int = field()
    config: Optional[shared.Config] = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    
