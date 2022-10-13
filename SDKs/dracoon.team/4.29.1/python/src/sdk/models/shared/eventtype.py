from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EventType:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    usable_customer_admin_webhook: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usableCustomerAdminWebhook' }})
    usable_node_webhook: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usableNodeWebhook' }})
    usable_push_notification: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usablePushNotification' }})
    usable_tenant_webhook: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usableTenantWebhook' }})
    
