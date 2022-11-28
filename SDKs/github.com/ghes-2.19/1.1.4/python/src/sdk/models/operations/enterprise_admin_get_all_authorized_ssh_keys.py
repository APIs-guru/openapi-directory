from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetAllAuthorizedSSHKeysResponse:
    content_type: str = field()
    status_code: int = field()
    ssh_keys: Optional[List[shared.SSHKey]] = field(default=None)
    
