from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AdBlockingRecoveryTag:
    r"""AdBlockingRecoveryTag
    Representation of an ad blocking recovery tag. See https://support.google.com/adsense/answer/11575177.
    """
    
    error_protection_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorProtectionCode') }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    
