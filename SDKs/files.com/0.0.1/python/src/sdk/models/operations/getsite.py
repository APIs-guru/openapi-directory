from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSiteResponse:
    content_type: str = field()
    status_code: int = field()
    site_entity: Optional[shared.SiteEntity] = field(default=None)
    
