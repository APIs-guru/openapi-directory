from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDPathParams:
    scouting_observation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'scoutingObservationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDSecurityOption1:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDSecurityOption2:
    oauth2_authorization_code: shared.SchemeOauth2AuthorizationCode = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDSecurity:
    option1: Optional[GetV4LayersScoutingObservationsScoutingObservationIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetV4LayersScoutingObservationsScoutingObservationIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDRequest:
    path_params: GetV4LayersScoutingObservationsScoutingObservationIDPathParams = field(default=None)
    security: GetV4LayersScoutingObservationsScoutingObservationIDSecurity = field(default=None)
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    scouting_observation: Optional[shared.ScoutingObservation] = field(default=None)
    status_code: int = field(default=None)
    
