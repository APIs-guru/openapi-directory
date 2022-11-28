from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class EnterpriseAdminAddAuthorizedSSHKeyRequestBody:
    authorized_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorized_key') }})
    

@dataclass
class EnterpriseAdminAddAuthorizedSSHKeyRequest:
    request: Optional[EnterpriseAdminAddAuthorizedSSHKeyRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminAddAuthorizedSSHKeyResponse:
    content_type: str = field()
    status_code: int = field()
    ssh_keys: Optional[List[shared.SSHKey]] = field(default=None)
    
