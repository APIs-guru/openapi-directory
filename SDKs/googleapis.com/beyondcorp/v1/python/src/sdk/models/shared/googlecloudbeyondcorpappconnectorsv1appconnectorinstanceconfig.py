from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import googlecloudbeyondcorpappconnectorsv1imageconfig
from . import googlecloudbeyondcorpappconnectorsv1notificationconfig


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig:
    image_config: Optional[googlecloudbeyondcorpappconnectorsv1imageconfig.GoogleCloudBeyondcorpAppconnectorsV1ImageConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageConfig' }})
    instance_config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceConfig' }})
    notification_config: Optional[googlecloudbeyondcorpappconnectorsv1notificationconfig.GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationConfig' }})
    sequence_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sequenceNumber' }})
    
