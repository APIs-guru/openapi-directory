from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import applicationmaintenanceconfigurationdescription


@dataclass_json
@dataclass
class UpdateApplicationMaintenanceConfigurationResponse:
    application_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationARN' }})
    application_maintenance_configuration_description: Optional[applicationmaintenanceconfigurationdescription.ApplicationMaintenanceConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationMaintenanceConfigurationDescription' }})
    
