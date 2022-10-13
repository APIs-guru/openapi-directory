from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsDynamoDbTableBillingModeSummary:
    billing_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BillingMode' }})
    last_update_to_pay_per_request_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdateToPayPerRequestDateTime' }})
    
