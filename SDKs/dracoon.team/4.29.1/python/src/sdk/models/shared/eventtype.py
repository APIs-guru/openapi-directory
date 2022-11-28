from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EventType:
    r"""EventType
    Event type information
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    usable_customer_admin_webhook: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('usableCustomerAdminWebhook') }})
    usable_node_webhook: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('usableNodeWebhook') }})
    usable_push_notification: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('usablePushNotification') }})
    usable_tenant_webhook: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('usableTenantWebhook') }})
    
