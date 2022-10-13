from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetAllAuthorizedSSHKeysResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    ssh_keys: Optional[List[shared.SSHKey]] = field(default=None)
    
