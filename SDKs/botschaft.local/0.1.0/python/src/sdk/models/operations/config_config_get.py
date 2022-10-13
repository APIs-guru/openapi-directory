from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConfigConfigGetHeaders:
    authorization: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'authorization' }})
    

@dataclass
class ConfigConfigGetRequest:
    headers: ConfigConfigGetHeaders = field(default=None)
    

@dataclass
class ConfigConfigGetResponse:
    config: Optional[shared.Config] = field(default=None)
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    status_code: int = field(default=None)
    
