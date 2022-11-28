from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConnectorInstanceConfig:
    r"""ConnectorInstanceConfig
    ConnectorInstanceConfig defines the instance config of a connector.
    """
    
    image_config: Optional[ImageConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageConfig') }})
    instance_config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceConfig') }})
    notification_config: Optional[NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationConfig') }})
    sequence_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequenceNumber') }})
    
