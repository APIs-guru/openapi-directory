from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetV4LayersAsAppliedActivityIDContentsPathParams:
    activity_id: str = field(metadata={'path_param': { 'field_name': 'activityId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV4LayersAsAppliedActivityIDContentsHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    range: str = field(metadata={'header': { 'field_name': 'Range', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV4LayersAsAppliedActivityIDContentsSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared.SchemeOauth2AuthorizationCode] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetV4LayersAsAppliedActivityIDContentsRequest:
    headers: GetV4LayersAsAppliedActivityIDContentsHeaders = field()
    path_params: GetV4LayersAsAppliedActivityIDContentsPathParams = field()
    security: GetV4LayersAsAppliedActivityIDContentsSecurity = field()
    

@dataclass
class GetV4LayersAsAppliedActivityIDContentsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
