from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetV4LayersAsHarvestedActivityIDContentsPathParams:
    activity_id: str = field(metadata={'path_param': { 'field_name': 'activityId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV4LayersAsHarvestedActivityIDContentsHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    range: str = field(metadata={'header': { 'field_name': 'Range', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV4LayersAsHarvestedActivityIDContentsSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared.SchemeOauth2AuthorizationCode] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetV4LayersAsHarvestedActivityIDContentsRequest:
    headers: GetV4LayersAsHarvestedActivityIDContentsHeaders = field()
    path_params: GetV4LayersAsHarvestedActivityIDContentsPathParams = field()
    security: GetV4LayersAsHarvestedActivityIDContentsSecurity = field()
    

@dataclass
class GetV4LayersAsHarvestedActivityIDContentsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
