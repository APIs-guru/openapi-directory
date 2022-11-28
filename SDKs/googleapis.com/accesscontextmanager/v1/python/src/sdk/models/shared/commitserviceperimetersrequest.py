from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CommitServicePerimetersRequest:
    r"""CommitServicePerimetersRequest
    A request to commit dry-run specs in all Service Perimeters belonging to an Access Policy.
    """
    
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    
