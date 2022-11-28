from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ThirdPartyDependenciesData:
    r"""ThirdPartyDependenciesData
    Third-party dependency information
    """
    
    artifact_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactId') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    group_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupId') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    licenses: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenses') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
