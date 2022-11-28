from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class DeploymentsGetAllResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    deployments: Optional[List[shared.Deployment]] = field(default=None)
    
