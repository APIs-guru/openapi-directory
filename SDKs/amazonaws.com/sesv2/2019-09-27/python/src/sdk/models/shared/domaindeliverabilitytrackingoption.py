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
class DomainDeliverabilityTrackingOption:
    r"""DomainDeliverabilityTrackingOption
    An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain.
    """
    
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domain') }})
    inbox_placement_tracking_option: Optional[InboxPlacementTrackingOption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InboxPlacementTrackingOption') }})
    subscription_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscriptionStartDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
