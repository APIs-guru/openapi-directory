from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class EventSubscription:
    r"""EventSubscription
    Describes event subscriptions.
    """
    
    cust_subscription_id: Optional[str] = field(default=None)
    customer_aws_id: Optional[str] = field(default=None)
    enabled: Optional[bool] = field(default=None)
    event_categories_list: Optional[List[str]] = field(default=None)
    severity: Optional[str] = field(default=None)
    sns_topic_arn: Optional[str] = field(default=None)
    source_ids_list: Optional[List[str]] = field(default=None)
    source_type: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    subscription_creation_time: Optional[datetime] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
