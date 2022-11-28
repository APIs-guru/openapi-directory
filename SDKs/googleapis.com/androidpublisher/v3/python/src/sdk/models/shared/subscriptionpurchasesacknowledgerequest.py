from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SubscriptionPurchasesAcknowledgeRequest:
    r"""SubscriptionPurchasesAcknowledgeRequest
    Request for the purchases.subscriptions.acknowledge API.
    """
    
    developer_payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerPayload') }})
    
