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
class Subscription:
    r"""Subscription
    Information about the Shield Advanced subscription for an account.
    """
    
    subscription_limits: SubscriptionLimits = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscriptionLimits') }})
    auto_renew: Optional[AutoRenewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoRenew') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    limits: Optional[List[Limit]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limits') }})
    proactive_engagement_status: Optional[ProactiveEngagementStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProactiveEngagementStatus') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subscription_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscriptionArn') }})
    time_commitment_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeCommitmentInSeconds') }})
    
