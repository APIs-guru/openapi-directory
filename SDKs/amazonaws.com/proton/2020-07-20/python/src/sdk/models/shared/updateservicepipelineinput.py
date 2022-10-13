from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deploymentupdatetype_enum


@dataclass_json
@dataclass
class UpdateServicePipelineInput:
    deployment_type: deploymentupdatetype_enum.DeploymentUpdateTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentType' }})
    service_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceName' }})
    spec: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    template_major_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateMajorVersion' }})
    template_minor_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateMinorVersion' }})
    
