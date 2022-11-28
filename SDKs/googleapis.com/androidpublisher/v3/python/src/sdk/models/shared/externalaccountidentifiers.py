from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExternalAccountIdentifiers:
    r"""ExternalAccountIdentifiers
    User account identifier in the third-party service.
    """
    
    external_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalAccountId') }})
    obfuscated_external_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obfuscatedExternalAccountId') }})
    obfuscated_external_profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obfuscatedExternalProfileId') }})
    
