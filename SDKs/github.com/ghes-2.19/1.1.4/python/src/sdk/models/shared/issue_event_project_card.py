from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IssueEventProjectCard:
    r"""IssueEventProjectCard
    Issue Event Project Card
    """
    
    column_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('column_name') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    project_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('project_id') }})
    project_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('project_url') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    previous_column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_column_name') }})
    
