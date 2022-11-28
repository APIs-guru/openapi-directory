from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutV3UsageBatchesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutV3UsageBatchesIDRequest:
    path_params: PutV3UsageBatchesIDPathParams = field()
    request: Optional[shared.ReportUsageBatchRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutV3UsageBatchesIDResponse:
    content_type: str = field()
    status_code: int = field()
    report_usage_batch_response: Optional[shared.ReportUsageBatchResponse] = field(default=None)
    
