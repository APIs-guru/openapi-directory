from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudbeyondcorpappconnectorsv1alphanotificationconfigcloudpubsubnotificationconfig


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfig:
    pubsub_notification: Optional[googlecloudbeyondcorpappconnectorsv1alphanotificationconfigcloudpubsubnotificationconfig.GoogleCloudBeyondcorpAppconnectorsV1alphaNotificationConfigCloudPubSubNotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pubsubNotification' }})
    
