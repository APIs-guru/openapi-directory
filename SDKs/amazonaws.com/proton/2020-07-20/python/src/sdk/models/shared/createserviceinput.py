from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateServiceInput:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    spec: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    template_major_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateMajorVersion') }})
    template_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateName') }})
    branch_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branchName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    repository_connection_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryConnectionArn') }})
    repository_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryId') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    template_minor_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateMinorVersion') }})
    
