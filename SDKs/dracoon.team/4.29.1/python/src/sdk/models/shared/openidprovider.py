from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OpenIDProvider:
    r"""OpenIDProvider
    OpenID Connect provider information
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_global_available: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isGlobalAvailable') }})
    issuer: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuer') }})
    mapping_claim: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mappingClaim') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    user_management_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userManagementUrl') }})
    
