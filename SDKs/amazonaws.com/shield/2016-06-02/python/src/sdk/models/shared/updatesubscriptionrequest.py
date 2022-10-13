from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import autorenew_enum


@dataclass_json
@dataclass
class UpdateSubscriptionRequest:
    auto_renew: Optional[autorenew_enum.AutoRenewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoRenew' }})
    
