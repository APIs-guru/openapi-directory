from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetJoinDetailsPathParams:
    conv_id: str = field(default=None, metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJoinDetailsSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetJoinDetailsRequest:
    path_params: GetJoinDetailsPathParams = field(default=None)
    security: GetJoinDetailsSecurity = field(default=None)
    

@dataclass
class GetJoinDetailsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    conversation_details: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
