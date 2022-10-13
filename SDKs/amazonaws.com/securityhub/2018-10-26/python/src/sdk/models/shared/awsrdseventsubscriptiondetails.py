from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsRdsEventSubscriptionDetails:
    cust_subscription_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustSubscriptionId' }})
    customer_aws_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomerAwsId' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    event_categories_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventCategoriesList' }})
    event_subscription_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventSubscriptionArn' }})
    sns_topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnsTopicArn' }})
    source_ids_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceIdsList' }})
    source_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceType' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    subscription_creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubscriptionCreationTime' }})
    
