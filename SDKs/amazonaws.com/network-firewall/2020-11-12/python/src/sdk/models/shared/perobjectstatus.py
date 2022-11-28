from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PerObjectStatus:
    r"""PerObjectStatus
    Provides configuration status for a single policy or rule group that is used for a firewall endpoint. Network Firewall provides each endpoint with the rules that are configured in the firewall policy. Each time you add a subnet or modify the associated firewall policy, Network Firewall synchronizes the rules in the endpoint, so it can properly filter network traffic. This is part of a <a>SyncState</a> for a firewall.
    """
    
    sync_status: Optional[PerObjectSyncStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SyncStatus') }})
    update_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateToken') }})
    
