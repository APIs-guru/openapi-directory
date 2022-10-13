from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import inboxplacementtrackingoption


@dataclass_json
@dataclass
class DomainDeliverabilityTrackingOption:
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Domain' }})
    inbox_placement_tracking_option: Optional[inboxplacementtrackingoption.InboxPlacementTrackingOption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InboxPlacementTrackingOption' }})
    subscription_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubscriptionStartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
