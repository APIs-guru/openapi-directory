from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import customermasterkeyspec_enum
from . import keyspec_enum
from . import keyusagetype_enum
from . import origintype_enum
from . import tag


@dataclass_json
@dataclass
class CreateKeyRequest:
    bypass_policy_lockout_safety_check: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BypassPolicyLockoutSafetyCheck' }})
    custom_key_store_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomKeyStoreId' }})
    customer_master_key_spec: Optional[customermasterkeyspec_enum.CustomerMasterKeySpecEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomerMasterKeySpec' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    key_spec: Optional[keyspec_enum.KeySpecEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeySpec' }})
    key_usage: Optional[keyusagetype_enum.KeyUsageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyUsage' }})
    multi_region: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MultiRegion' }})
    origin: Optional[origintype_enum.OriginTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Origin' }})
    policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Policy' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
