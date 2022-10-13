from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import applicationstatus_enum


@dataclass_json
@dataclass
class ApplicationSummary:
    application_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationARN' }})
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationName' }})
    application_status: applicationstatus_enum.ApplicationStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationStatus' }})
    
