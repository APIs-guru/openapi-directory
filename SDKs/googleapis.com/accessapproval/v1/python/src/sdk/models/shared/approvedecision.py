from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import signatureinfo


@dataclass_json
@dataclass
class ApproveDecision:
    approve_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approveTime' }})
    auto_approved: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoApproved' }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    invalidate_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invalidateTime' }})
    signature_info: Optional[signatureinfo.SignatureInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signatureInfo' }})
    
