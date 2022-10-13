from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import applicationstatus_enum


@dataclass_json
@dataclass
class ApplicationVersionSummary:
    application_status: applicationstatus_enum.ApplicationStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationStatus' }})
    application_version_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationVersionId' }})
    
