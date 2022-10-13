from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import blockpublicaccess


@dataclass_json
@dataclass
class AccountLevelPermissions:
    block_public_access: Optional[blockpublicaccess.BlockPublicAccess] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockPublicAccess' }})
    
