from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSiteUsageResponse:
    content_type: str = field()
    status_code: int = field()
    usage_snapshot_entity: Optional[shared.UsageSnapshotEntity] = field(default=None)
    
