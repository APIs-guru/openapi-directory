from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreateEnvironmentInput:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    environment_account_connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentAccountConnectionId' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    proton_service_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protonServiceRoleArn' }})
    spec: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    template_major_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateMajorVersion' }})
    template_minor_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateMinorVersion' }})
    template_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateName' }})
    
