from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import lensupgradesummary
from . import notificationtype_enum


@dataclass_json
@dataclass
class NotificationSummary:
    lens_upgrade_summary: Optional[lensupgradesummary.LensUpgradeSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LensUpgradeSummary' }})
    type: Optional[notificationtype_enum.NotificationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
