from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetJoinDetailsMultipleQueryParams:
    conv_ids: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'convIds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetJoinDetailsMultipleSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetJoinDetailsMultipleRequest:
    query_params: GetJoinDetailsMultipleQueryParams = field(default=None)
    security: GetJoinDetailsMultipleSecurity = field(default=None)
    

@dataclass
class GetJoinDetailsMultipleResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    conversation_details: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
