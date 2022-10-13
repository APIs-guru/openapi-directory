from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSiteResponse:
    content_type: str = field(default=None)
    site_entity: Optional[shared.SiteEntity] = field(default=None)
    status_code: int = field(default=None)
    
