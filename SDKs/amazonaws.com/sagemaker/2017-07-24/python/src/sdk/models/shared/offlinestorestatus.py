from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import offlinestorestatusvalue_enum


@dataclass_json
@dataclass
class OfflineStoreStatus:
    blocked_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockedReason' }})
    status: offlinestorestatusvalue_enum.OfflineStoreStatusValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
