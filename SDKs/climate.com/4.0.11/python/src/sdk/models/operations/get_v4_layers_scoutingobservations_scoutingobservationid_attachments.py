from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsPathParams:
    scouting_observation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'scoutingObservationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsHeaders:
    x_limit: Optional[int] = field(default=None, metadata={'header': { 'field_name': 'X-Limit' }})
    x_next_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Next-Token' }})
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsSecurityOption1:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsSecurityOption2:
    oauth2_authorization_code: shared.SchemeOauth2AuthorizationCode = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsSecurity:
    option1: Optional[GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsRequest:
    path_params: GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsPathParams = field(default=None)
    headers: GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsHeaders = field(default=None)
    security: GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsSecurity = field(default=None)
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsResponse:
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    scouting_observation_attachments: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
