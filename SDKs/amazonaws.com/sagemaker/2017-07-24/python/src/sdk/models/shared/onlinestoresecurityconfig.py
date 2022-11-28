from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OnlineStoreSecurityConfig:
    r"""OnlineStoreSecurityConfig
    The security configuration for <code>OnlineStore</code>.
    """
    
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    
