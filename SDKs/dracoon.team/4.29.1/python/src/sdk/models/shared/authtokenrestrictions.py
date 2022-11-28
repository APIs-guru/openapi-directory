from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AuthTokenRestrictions:
    r"""AuthTokenRestrictions
    Auth token restrictions
    """
    
    access_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessTokenValidity') }})
    refresh_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshTokenValidity') }})
    restriction_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictionEnabled') }})
    
