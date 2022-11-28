from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInstanceConfig:
    r"""GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInstanceConfig
    AppConnectorInstanceConfig defines the instance config of a AppConnector.
    """
    
    image_config: Optional[GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageConfig') }})
    instance_config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceConfig') }})
    notification_config: Optional[GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationConfig') }})
    sequence_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequenceNumber') }})
    
