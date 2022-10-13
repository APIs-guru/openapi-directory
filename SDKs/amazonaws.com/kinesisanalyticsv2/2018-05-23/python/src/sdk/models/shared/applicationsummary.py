from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import applicationmode_enum
from . import applicationstatus_enum
from . import runtimeenvironment_enum


@dataclass_json
@dataclass
class ApplicationSummary:
    application_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationARN' }})
    application_mode: Optional[applicationmode_enum.ApplicationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationMode' }})
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationName' }})
    application_status: applicationstatus_enum.ApplicationStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationStatus' }})
    application_version_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationVersionId' }})
    runtime_environment: runtimeenvironment_enum.RuntimeEnvironmentEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuntimeEnvironment' }})
    
