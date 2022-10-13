from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import cloudwatchoutputconfig
from . import documenthashtype_enum
from . import notificationconfig
from . import target


@dataclass_json
@dataclass
class SendCommandRequest:
    cloud_watch_output_config: Optional[cloudwatchoutputconfig.CloudWatchOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchOutputConfig' }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Comment' }})
    document_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentHash' }})
    document_hash_type: Optional[documenthashtype_enum.DocumentHashTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentHashType' }})
    document_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentName' }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentVersion' }})
    instance_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceIds' }})
    max_concurrency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxConcurrency' }})
    max_errors: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxErrors' }})
    notification_config: Optional[notificationconfig.NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationConfig' }})
    output_s3_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputS3BucketName' }})
    output_s3_key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputS3KeyPrefix' }})
    output_s3_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputS3Region' }})
    parameters: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    service_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceRoleArn' }})
    targets: Optional[List[target.Target]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Targets' }})
    timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeoutSeconds' }})
    
