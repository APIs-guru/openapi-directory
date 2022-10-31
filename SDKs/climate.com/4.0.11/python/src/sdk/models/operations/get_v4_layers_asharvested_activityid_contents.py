from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetV4LayersAsHarvestedActivityIDContentsPathParams:
    activity_id: str = field(default=None, metadata={'path_param': { 'field_name': 'activityId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV4LayersAsHarvestedActivityIDContentsHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    range: str = field(default=None, metadata={'header': { 'field_name': 'Range', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV4LayersAsHarvestedActivityIDContentsSecurityOption1:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetV4LayersAsHarvestedActivityIDContentsSecurityOption2:
    oauth2_authorization_code: shared.SchemeOauth2AuthorizationCode = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetV4LayersAsHarvestedActivityIDContentsSecurity:
    option1: Optional[GetV4LayersAsHarvestedActivityIDContentsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetV4LayersAsHarvestedActivityIDContentsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetV4LayersAsHarvestedActivityIDContentsRequest:
    path_params: GetV4LayersAsHarvestedActivityIDContentsPathParams = field(default=None)
    headers: GetV4LayersAsHarvestedActivityIDContentsHeaders = field(default=None)
    security: GetV4LayersAsHarvestedActivityIDContentsSecurity = field(default=None)
    

@dataclass
class GetV4LayersAsHarvestedActivityIDContentsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
