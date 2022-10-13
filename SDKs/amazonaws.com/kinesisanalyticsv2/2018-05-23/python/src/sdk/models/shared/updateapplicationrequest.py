from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import applicationconfigurationupdate
from . import cloudwatchloggingoptionupdate
from . import runconfigurationupdate


@dataclass_json
@dataclass
class UpdateApplicationRequest:
    application_configuration_update: Optional[applicationconfigurationupdate.ApplicationConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationConfigurationUpdate' }})
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationName' }})
    cloud_watch_logging_option_updates: Optional[List[cloudwatchloggingoptionupdate.CloudWatchLoggingOptionUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLoggingOptionUpdates' }})
    conditional_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConditionalToken' }})
    current_application_version_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentApplicationVersionId' }})
    run_configuration_update: Optional[runconfigurationupdate.RunConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunConfigurationUpdate' }})
    service_execution_role_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceExecutionRoleUpdate' }})
    
