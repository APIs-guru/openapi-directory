from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import operatingsystemconfigurationmanager


@dataclass_json
@dataclass
class OperatingSystem:
    configuration_managers: Optional[List[operatingsystemconfigurationmanager.OperatingSystemConfigurationManager]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationManagers' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    reported_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportedName' }})
    reported_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportedVersion' }})
    supported: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Supported' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
