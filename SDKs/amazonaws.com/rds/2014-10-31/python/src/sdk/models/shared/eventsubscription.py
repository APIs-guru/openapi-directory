from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class EventSubscription:
    r"""EventSubscription
    Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action.
    """
    
    cust_subscription_id: Optional[str] = field(default=None)
    customer_aws_id: Optional[str] = field(default=None)
    enabled: Optional[bool] = field(default=None)
    event_categories_list: Optional[List[str]] = field(default=None)
    event_subscription_arn: Optional[str] = field(default=None)
    sns_topic_arn: Optional[str] = field(default=None)
    source_ids_list: Optional[List[str]] = field(default=None)
    source_type: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    subscription_creation_time: Optional[str] = field(default=None)
    
