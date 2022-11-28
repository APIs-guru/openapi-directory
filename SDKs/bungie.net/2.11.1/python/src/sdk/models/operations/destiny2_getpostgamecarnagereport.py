from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Destiny2GetPostGameCarnageReportPathParams:
    activity_id: int = field(metadata={'path_param': { 'field_name': 'activityId', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2GetPostGameCarnageReportRequest:
    path_params: Destiny2GetPostGameCarnageReportPathParams = field()
    

@dataclass
class Destiny2GetPostGameCarnageReportResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
