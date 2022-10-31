from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetV4LayersScoutingObservationsQueryParams:
    occurred_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'occurredAfter', 'style': 'form', 'explode': True }})
    occurred_before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'occurredBefore', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV4LayersScoutingObservationsHeaders:
    x_limit: Optional[int] = field(default=None, metadata={'header': { 'field_name': 'X-Limit', 'style': 'simple', 'explode': False }})
    x_next_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Next-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV4LayersScoutingObservationsSecurityOption1:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetV4LayersScoutingObservationsSecurityOption2:
    oauth2_authorization_code: shared.SchemeOauth2AuthorizationCode = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetV4LayersScoutingObservationsSecurity:
    option1: Optional[GetV4LayersScoutingObservationsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetV4LayersScoutingObservationsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetV4LayersScoutingObservationsRequest:
    query_params: GetV4LayersScoutingObservationsQueryParams = field(default=None)
    headers: GetV4LayersScoutingObservationsHeaders = field(default=None)
    security: GetV4LayersScoutingObservationsSecurity = field(default=None)
    

@dataclass
class GetV4LayersScoutingObservationsResponse:
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    scouting_observations: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
