from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreateServiceInput:
    branch_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branchName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    repository_connection_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryConnectionArn' }})
    repository_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryId' }})
    spec: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    template_major_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateMajorVersion' }})
    template_minor_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateMinorVersion' }})
    template_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateName' }})
    
