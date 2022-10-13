from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import cloudwatchoutputconfig
from . import commandplugin
from . import notificationconfig
from . import commandinvocationstatus_enum


@dataclass_json
@dataclass
class CommandInvocation:
    cloud_watch_output_config: Optional[cloudwatchoutputconfig.CloudWatchOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchOutputConfig' }})
    command_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CommandId' }})
    command_plugins: Optional[List[commandplugin.CommandPlugin]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CommandPlugins' }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Comment' }})
    document_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentName' }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentVersion' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceName' }})
    notification_config: Optional[notificationconfig.NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationConfig' }})
    requested_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceRole' }})
    standard_error_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StandardErrorUrl' }})
    standard_output_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StandardOutputUrl' }})
    status: Optional[commandinvocationstatus_enum.CommandInvocationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusDetails' }})
    trace_output: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TraceOutput' }})
    
