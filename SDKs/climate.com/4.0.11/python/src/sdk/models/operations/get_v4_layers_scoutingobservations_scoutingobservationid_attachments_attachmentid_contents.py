from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsPathParams:
    attachment_id: str = field(metadata={'path_param': { 'field_name': 'attachmentId', 'style': 'simple', 'explode': False }})
    scouting_observation_id: str = field(metadata={'path_param': { 'field_name': 'scoutingObservationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    range: str = field(metadata={'header': { 'field_name': 'Range', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared.SchemeOauth2AuthorizationCode] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsRequest:
    headers: GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsHeaders = field()
    path_params: GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsPathParams = field()
    security: GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsSecurity = field()
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
