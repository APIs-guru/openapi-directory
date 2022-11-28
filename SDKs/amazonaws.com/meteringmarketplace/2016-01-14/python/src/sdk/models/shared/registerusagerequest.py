from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RegisterUsageRequest:
    product_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductCode') }})
    public_key_version: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicKeyVersion') }})
    nonce: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Nonce') }})
    
