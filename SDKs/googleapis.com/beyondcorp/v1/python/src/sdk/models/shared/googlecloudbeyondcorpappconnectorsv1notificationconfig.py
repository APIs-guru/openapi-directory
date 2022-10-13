from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudbeyondcorpappconnectorsv1notificationconfigcloudpubsubnotificationconfig


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig:
    pubsub_notification: Optional[googlecloudbeyondcorpappconnectorsv1notificationconfigcloudpubsubnotificationconfig.GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pubsubNotification' }})
    
