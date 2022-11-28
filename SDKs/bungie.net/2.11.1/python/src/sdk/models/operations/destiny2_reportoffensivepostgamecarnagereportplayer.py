from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class Destiny2ReportOffensivePostGameCarnageReportPlayerPathParams:
    activity_id: int = field(metadata={'path_param': { 'field_name': 'activityId', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2ReportOffensivePostGameCarnageReportPlayerSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Destiny2ReportOffensivePostGameCarnageReportPlayerRequest:
    path_params: Destiny2ReportOffensivePostGameCarnageReportPlayerPathParams = field()
    security: Destiny2ReportOffensivePostGameCarnageReportPlayerSecurity = field()
    

@dataclass
class Destiny2ReportOffensivePostGameCarnageReportPlayerResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
