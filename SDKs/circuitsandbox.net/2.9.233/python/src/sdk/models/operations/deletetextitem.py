from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DeleteTextItemPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTextItemSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteTextItemRequest:
    path_params: DeleteTextItemPathParams = field()
    security: DeleteTextItemSecurity = field()
    

@dataclass
class DeleteTextItemResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversation_item: Optional[Any] = field(default=None)
    
