from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetJoinDetailsMultipleQueryParams:
    conv_ids: List[str] = field(metadata={'query_param': { 'field_name': 'convIds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetJoinDetailsMultipleSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetJoinDetailsMultipleRequest:
    query_params: GetJoinDetailsMultipleQueryParams = field()
    security: GetJoinDetailsMultipleSecurity = field()
    

@dataclass
class GetJoinDetailsMultipleResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversation_details: Optional[List[Any]] = field(default=None)
    
