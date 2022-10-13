from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import imageconfig
from . import notificationconfig


@dataclass_json
@dataclass
class ConnectorInstanceConfig:
    image_config: Optional[imageconfig.ImageConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageConfig' }})
    instance_config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceConfig' }})
    notification_config: Optional[notificationconfig.NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationConfig' }})
    sequence_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sequenceNumber' }})
    
