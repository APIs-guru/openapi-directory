from dataclasses import dataclass, field



@dataclass
class Destiny2ReportOffensivePostGameCarnageReportPlayerPathParams:
    activity_id: int = field(default=None, metadata={'path_param': { 'field_name': 'activityId', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2ReportOffensivePostGameCarnageReportPlayerSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Destiny2ReportOffensivePostGameCarnageReportPlayerRequest:
    path_params: Destiny2ReportOffensivePostGameCarnageReportPlayerPathParams = field(default=None)
    security: Destiny2ReportOffensivePostGameCarnageReportPlayerSecurity = field(default=None)
    

@dataclass
class Destiny2ReportOffensivePostGameCarnageReportPlayerResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
