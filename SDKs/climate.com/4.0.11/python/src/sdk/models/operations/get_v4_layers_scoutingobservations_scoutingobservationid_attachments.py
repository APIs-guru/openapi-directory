from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsPathParams:
    scouting_observation_id: str = field(metadata={'path_param': { 'field_name': 'scoutingObservationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsHeaders:
    x_limit: Optional[int] = field(default=None, metadata={'header': { 'field_name': 'X-Limit', 'style': 'simple', 'explode': False }})
    x_next_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Next-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared.SchemeOauth2AuthorizationCode] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsRequest:
    headers: GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsHeaders = field()
    path_params: GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsPathParams = field()
    security: GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsSecurity = field()
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    scouting_observation_attachments: Optional[Any] = field(default=None)
    
