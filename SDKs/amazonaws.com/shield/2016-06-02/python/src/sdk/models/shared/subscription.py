from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import autorenew_enum
from . import limit
from . import proactiveengagementstatus_enum
from . import subscriptionlimits


@dataclass_json
@dataclass
class Subscription:
    auto_renew: Optional[autorenew_enum.AutoRenewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoRenew' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    limits: Optional[List[limit.Limit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limits' }})
    proactive_engagement_status: Optional[proactiveengagementstatus_enum.ProactiveEngagementStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProactiveEngagementStatus' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subscription_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubscriptionArn' }})
    subscription_limits: subscriptionlimits.SubscriptionLimits = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubscriptionLimits' }})
    time_commitment_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeCommitmentInSeconds' }})
    
