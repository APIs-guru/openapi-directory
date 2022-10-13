from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import applicationconfiguration
from . import applicationmode_enum
from . import cloudwatchloggingoption
from . import runtimeenvironment_enum
from . import tag


@dataclass_json
@dataclass
class CreateApplicationRequest:
    application_configuration: Optional[applicationconfiguration.ApplicationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationConfiguration' }})
    application_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationDescription' }})
    application_mode: Optional[applicationmode_enum.ApplicationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationMode' }})
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationName' }})
    cloud_watch_logging_options: Optional[List[cloudwatchloggingoption.CloudWatchLoggingOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLoggingOptions' }})
    runtime_environment: runtimeenvironment_enum.RuntimeEnvironmentEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuntimeEnvironment' }})
    service_execution_role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceExecutionRole' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
