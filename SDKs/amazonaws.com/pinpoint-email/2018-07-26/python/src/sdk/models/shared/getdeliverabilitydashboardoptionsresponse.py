from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetDeliverabilityDashboardOptionsResponse:
    r"""GetDeliverabilityDashboardOptionsResponse
    An object that shows the status of the Deliverability dashboard for your Amazon Pinpoint account.
    """
    
    dashboard_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DashboardEnabled') }})
    account_status: Optional[DeliverabilityDashboardAccountStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountStatus') }})
    active_subscribed_domains: Optional[List[DomainDeliverabilityTrackingOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActiveSubscribedDomains') }})
    pending_expiration_subscribed_domains: Optional[List[DomainDeliverabilityTrackingOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PendingExpirationSubscribedDomains') }})
    subscription_expiry_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscriptionExpiryDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
