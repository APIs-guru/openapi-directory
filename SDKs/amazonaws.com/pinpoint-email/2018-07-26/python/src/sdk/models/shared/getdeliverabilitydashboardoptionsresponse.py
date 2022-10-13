from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import deliverabilitydashboardaccountstatus_enum
from . import domaindeliverabilitytrackingoption
from . import domaindeliverabilitytrackingoption


@dataclass_json
@dataclass
class GetDeliverabilityDashboardOptionsResponse:
    account_status: Optional[deliverabilitydashboardaccountstatus_enum.DeliverabilityDashboardAccountStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountStatus' }})
    active_subscribed_domains: Optional[List[domaindeliverabilitytrackingoption.DomainDeliverabilityTrackingOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActiveSubscribedDomains' }})
    dashboard_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DashboardEnabled' }})
    pending_expiration_subscribed_domains: Optional[List[domaindeliverabilitytrackingoption.DomainDeliverabilityTrackingOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PendingExpirationSubscribedDomains' }})
    subscription_expiry_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubscriptionExpiryDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
