from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MetadataProperties:
    r"""MetadataProperties
    Metadata properties of the tracking entity, trial, or trial component.
    """
    
    commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CommitId') }})
    generated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GeneratedBy') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectId') }})
    repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Repository') }})
    
