from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import activedirectoryconfiguration
from . import computefarmconfiguration
from . import licenseserviceconfiguration
from . import sharedfilesystemconfiguration


@dataclass_json
@dataclass
class StudioComponentConfiguration:
    active_directory_configuration: Optional[activedirectoryconfiguration.ActiveDirectoryConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeDirectoryConfiguration' }})
    compute_farm_configuration: Optional[computefarmconfiguration.ComputeFarmConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeFarmConfiguration' }})
    license_service_configuration: Optional[licenseserviceconfiguration.LicenseServiceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licenseServiceConfiguration' }})
    shared_file_system_configuration: Optional[sharedfilesystemconfiguration.SharedFileSystemConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharedFileSystemConfiguration' }})
    
