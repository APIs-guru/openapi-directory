from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetV4LayersAsPlantedActivityIDContentsPathParams:
    activity_id: str = field(default=None, metadata={'path_param': { 'field_name': 'activityId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV4LayersAsPlantedActivityIDContentsHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    range: str = field(default=None, metadata={'header': { 'field_name': 'Range', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV4LayersAsPlantedActivityIDContentsSecurityOption1:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetV4LayersAsPlantedActivityIDContentsSecurityOption2:
    oauth2_authorization_code: shared.SchemeOauth2AuthorizationCode = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetV4LayersAsPlantedActivityIDContentsSecurity:
    option1: Optional[GetV4LayersAsPlantedActivityIDContentsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetV4LayersAsPlantedActivityIDContentsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetV4LayersAsPlantedActivityIDContentsRequest:
    path_params: GetV4LayersAsPlantedActivityIDContentsPathParams = field(default=None)
    headers: GetV4LayersAsPlantedActivityIDContentsHeaders = field(default=None)
    security: GetV4LayersAsPlantedActivityIDContentsSecurity = field(default=None)
    

@dataclass
class GetV4LayersAsPlantedActivityIDContentsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
