from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RoomWebhookAssignment:
    r"""RoomWebhookAssignment
    Request model for handling webhook assignments
    """
    
    is_assigned: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAssigned') }})
    webhook_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookId') }})
    
