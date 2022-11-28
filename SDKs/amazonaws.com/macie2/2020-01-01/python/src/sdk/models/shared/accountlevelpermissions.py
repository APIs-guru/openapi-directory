from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountLevelPermissions:
    r"""AccountLevelPermissions
    Provides information about the account-level permissions settings that apply to an S3 bucket.
    """
    
    block_public_access: Optional[BlockPublicAccess] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockPublicAccess') }})
    
