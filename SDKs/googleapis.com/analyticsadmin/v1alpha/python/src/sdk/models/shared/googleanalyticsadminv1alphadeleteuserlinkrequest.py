from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest:
    r"""GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest
    Request message for DeleteUserLink RPC.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
