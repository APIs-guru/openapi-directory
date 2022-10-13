from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import googlecloudbeyondcorpappconnectorsv1alphaimageconfig
from . import googlecloudbeyondcorpappconnectorsv1alphanotificationconfig


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInstanceConfig:
    image_config: Optional[googlecloudbeyondcorpappconnectorsv1alphaimageconfig.GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageConfig' }})
    instance_config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceConfig' }})
    notification_config: Optional[googlecloudbeyondcorpappconnectorsv1alphanotificationconfig.GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationConfig' }})
    sequence_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sequenceNumber' }})
    
