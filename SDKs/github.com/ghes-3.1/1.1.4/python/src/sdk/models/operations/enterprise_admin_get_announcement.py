from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetAnnouncementResponse:
    content_type: str = field()
    status_code: int = field()
    announcement: Optional[shared.Announcement] = field(default=None)
    
