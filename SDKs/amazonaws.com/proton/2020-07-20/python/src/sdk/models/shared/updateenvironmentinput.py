from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deploymentupdatetype_enum


@dataclass_json
@dataclass
class UpdateEnvironmentInput:
    deployment_type: deploymentupdatetype_enum.DeploymentUpdateTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentType' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    environment_account_connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentAccountConnectionId' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    proton_service_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protonServiceRoleArn' }})
    spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    template_major_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateMajorVersion' }})
    template_minor_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateMinorVersion' }})
    
