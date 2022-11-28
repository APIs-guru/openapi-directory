from dataclasses import dataclass, field



@dataclass
class AppsRevokeInstallationAccessTokenResponse:
    content_type: str = field()
    status_code: int = field()
    
