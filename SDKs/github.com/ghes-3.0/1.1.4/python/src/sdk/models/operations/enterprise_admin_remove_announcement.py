from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminRemoveAnnouncementResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
