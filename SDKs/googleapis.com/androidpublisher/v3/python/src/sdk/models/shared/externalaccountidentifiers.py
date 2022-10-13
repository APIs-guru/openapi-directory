from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExternalAccountIdentifiers:
    external_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalAccountId' }})
    obfuscated_external_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'obfuscatedExternalAccountId' }})
    obfuscated_external_profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'obfuscatedExternalProfileId' }})
    
