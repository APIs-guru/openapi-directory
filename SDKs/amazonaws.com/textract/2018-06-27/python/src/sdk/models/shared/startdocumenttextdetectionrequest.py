from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import documentlocation
from . import notificationchannel
from . import outputconfig


@dataclass_json
@dataclass
class StartDocumentTextDetectionRequest:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    document_location: documentlocation.DocumentLocation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentLocation' }})
    job_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobTag' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KMSKeyId' }})
    notification_channel: Optional[notificationchannel.NotificationChannel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationChannel' }})
    output_config: Optional[outputconfig.OutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputConfig' }})
    
