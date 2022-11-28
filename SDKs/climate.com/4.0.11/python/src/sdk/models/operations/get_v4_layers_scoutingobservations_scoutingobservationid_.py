from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDPathParams:
    scouting_observation_id: str = field(metadata={'path_param': { 'field_name': 'scoutingObservationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared.SchemeOauth2AuthorizationCode] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDRequest:
    path_params: GetV4LayersScoutingObservationsScoutingObservationIDPathParams = field()
    security: GetV4LayersScoutingObservationsScoutingObservationIDSecurity = field()
    

@dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    scouting_observation: Optional[shared.ScoutingObservation] = field(default=None)
    
