from dataclasses import dataclass, field



@dataclass
class Destiny2GetPostGameCarnageReportPathParams:
    activity_id: int = field(default=None, metadata={'path_param': { 'field_name': 'activityId', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2GetPostGameCarnageReportRequest:
    path_params: Destiny2GetPostGameCarnageReportPathParams = field(default=None)
    

@dataclass
class Destiny2GetPostGameCarnageReportResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
