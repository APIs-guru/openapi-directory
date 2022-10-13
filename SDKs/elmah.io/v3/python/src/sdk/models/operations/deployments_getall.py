from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class DeploymentsGetAllResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    deployments: Optional[List[shared.Deployment]] = field(default=None)
    status_code: int = field(default=None)
    
