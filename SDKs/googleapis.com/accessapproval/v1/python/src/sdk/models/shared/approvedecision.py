from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApproveDecision:
    r"""ApproveDecision
    A decision that has been made to approve access to a resource.
    """
    
    approve_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approveTime') }})
    auto_approved: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoApproved') }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    invalidate_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invalidateTime') }})
    signature_info: Optional[SignatureInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signatureInfo') }})
    
