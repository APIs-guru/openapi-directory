from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MaintenanceWindowRunCommandParameters:
    r"""MaintenanceWindowRunCommandParameters
    <p>The parameters for a <code>RUN_COMMAND</code> task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For <code>RUN_COMMAND</code> tasks, Systems Manager uses specified values for <code>TaskParameters</code> and <code>LoggingInfo</code> only if no values are specified for <code>TaskInvocationParameters</code>. </p> </note>
    """
    
    cloud_watch_output_config: Optional[CloudWatchOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchOutputConfig') }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Comment') }})
    document_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentHash') }})
    document_hash_type: Optional[DocumentHashTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentHashType') }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentVersion') }})
    notification_config: Optional[NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationConfig') }})
    output_s3_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputS3BucketName') }})
    output_s3_key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputS3KeyPrefix') }})
    parameters: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    service_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceRoleArn') }})
    timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeoutSeconds') }})
    
