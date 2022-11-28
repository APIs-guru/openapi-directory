from dataclasses import dataclass, field



@dataclass
class GetGetActionableNotificationsResponse:
    content_type: str = field()
    status_code: int = field()
    
