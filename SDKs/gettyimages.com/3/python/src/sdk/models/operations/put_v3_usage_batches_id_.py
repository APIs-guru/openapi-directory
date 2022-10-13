from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutV3UsageBatchesIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutV3UsageBatchesIDRequest:
    path_params: PutV3UsageBatchesIDPathParams = field(default=None)
    request: Optional[shared.ReportUsageBatchRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutV3UsageBatchesIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    report_usage_batch_response: Optional[shared.ReportUsageBatchResponse] = field(default=None)
    
