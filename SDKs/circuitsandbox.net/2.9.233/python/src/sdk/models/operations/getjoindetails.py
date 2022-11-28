from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetJoinDetailsPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJoinDetailsSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetJoinDetailsRequest:
    path_params: GetJoinDetailsPathParams = field()
    security: GetJoinDetailsSecurity = field()
    

@dataclass
class GetJoinDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversation_details: Optional[Any] = field(default=None)
    
