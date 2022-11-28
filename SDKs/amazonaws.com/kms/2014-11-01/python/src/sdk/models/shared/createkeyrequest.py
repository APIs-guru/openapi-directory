from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateKeyRequest:
    bypass_policy_lockout_safety_check: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BypassPolicyLockoutSafetyCheck') }})
    custom_key_store_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomKeyStoreId') }})
    customer_master_key_spec: Optional[CustomerMasterKeySpecEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerMasterKeySpec') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    key_spec: Optional[KeySpecEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeySpec') }})
    key_usage: Optional[KeyUsageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyUsage') }})
    multi_region: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MultiRegion') }})
    origin: Optional[OriginTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Origin') }})
    policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Policy') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
