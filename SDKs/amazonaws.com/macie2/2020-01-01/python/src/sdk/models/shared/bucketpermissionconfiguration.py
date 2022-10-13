from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import accountlevelpermissions
from . import bucketlevelpermissions


@dataclass_json
@dataclass
class BucketPermissionConfiguration:
    account_level_permissions: Optional[accountlevelpermissions.AccountLevelPermissions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountLevelPermissions' }})
    bucket_level_permissions: Optional[bucketlevelpermissions.BucketLevelPermissions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketLevelPermissions' }})
    
