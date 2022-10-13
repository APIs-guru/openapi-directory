from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import cloudwatchoutputconfig
from . import commandinvocationstatus_enum


@dataclass_json
@dataclass
class GetCommandInvocationResult:
    cloud_watch_output_config: Optional[cloudwatchoutputconfig.CloudWatchOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchOutputConfig' }})
    command_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CommandId' }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Comment' }})
    document_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentName' }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentVersion' }})
    execution_elapsed_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionElapsedTime' }})
    execution_end_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionEndDateTime' }})
    execution_start_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionStartDateTime' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    plugin_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PluginName' }})
    response_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResponseCode' }})
    standard_error_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StandardErrorContent' }})
    standard_error_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StandardErrorUrl' }})
    standard_output_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StandardOutputContent' }})
    standard_output_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StandardOutputUrl' }})
    status: Optional[commandinvocationstatus_enum.CommandInvocationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusDetails' }})
    
