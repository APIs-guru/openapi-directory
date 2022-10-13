from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class EnterpriseAdminAddAuthorizedSSHKeyRequestBody:
    authorized_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorized_key' }})
    

@dataclass
class EnterpriseAdminAddAuthorizedSSHKeyRequest:
    request: Optional[EnterpriseAdminAddAuthorizedSSHKeyRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminAddAuthorizedSSHKeyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    ssh_keys: Optional[List[shared.SSHKey]] = field(default=None)
    
