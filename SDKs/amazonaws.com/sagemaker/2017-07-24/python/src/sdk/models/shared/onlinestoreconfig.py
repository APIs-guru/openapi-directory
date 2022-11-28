from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OnlineStoreConfig:
    r"""OnlineStoreConfig
    Use this to specify the Amazon Web Services Key Management Service (KMS) Key ID, or <code>KMSKeyId</code>, for at rest data encryption. You can turn <code>OnlineStore</code> on or off by specifying the <code>EnableOnlineStore</code> flag at General Assembly; the default value is <code>False</code>.
    """
    
    enable_online_store: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableOnlineStore') }})
    security_config: Optional[OnlineStoreSecurityConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityConfig') }})
    
