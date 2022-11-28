from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DependencyRevision:
    r"""DependencyRevision
    An object that contains the ID and revision number of a workflow or system that is part of a deployment.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    revision_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionNumber') }})
    
