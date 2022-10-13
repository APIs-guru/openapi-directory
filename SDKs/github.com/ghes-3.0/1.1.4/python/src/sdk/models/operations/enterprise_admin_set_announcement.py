from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminSetAnnouncementRequest:
    request: Optional[shared.Announcement] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminSetAnnouncementResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    announcement: Optional[shared.Announcement] = field(default=None)
    
