from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsPathParams:
    attachment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'attachmentId', 'style': 'simple', 'explode': False }})
    scouting_observation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'scoutingObservationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    range: str = field(default=None, metadata={'header': { 'field_name': 'Range' }})
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsSecurityOption1:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsSecurityOption2:
    oauth2_authorization_code: shared.SchemeOauth2AuthorizationCode = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsSecurity:
    option1: Optional[GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsRequest:
    path_params: GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsPathParams = field(default=None)
    headers: GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsHeaders = field(default=None)
    security: GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsSecurity = field(default=None)
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsAttachmentIDContentsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
