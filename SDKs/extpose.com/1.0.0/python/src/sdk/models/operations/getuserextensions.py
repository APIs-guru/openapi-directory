from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUserExtensionsSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetUserExtensionsRequest:
    security: GetUserExtensionsSecurity = field()
    

@dataclass
class GetUserExtensionsResponse:
    content_type: str = field()
    status_code: int = field()
    extensions: Optional[List[shared.Extension]] = field(default=None)
    
