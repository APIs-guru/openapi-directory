from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import accountdetails
from . import sendquota
from . import suppressionattributes


@dataclass_json
@dataclass
class GetAccountResponse:
    dedicated_ip_auto_warmup_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DedicatedIpAutoWarmupEnabled' }})
    details: Optional[accountdetails.AccountDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Details' }})
    enforcement_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnforcementStatus' }})
    production_access_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductionAccessEnabled' }})
    send_quota: Optional[sendquota.SendQuota] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SendQuota' }})
    sending_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SendingEnabled' }})
    suppression_attributes: Optional[suppressionattributes.SuppressionAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuppressionAttributes' }})
    
