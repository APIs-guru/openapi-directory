from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSiteUsageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    usage_snapshot_entity: Optional[shared.UsageSnapshotEntity] = field(default=None)
    
