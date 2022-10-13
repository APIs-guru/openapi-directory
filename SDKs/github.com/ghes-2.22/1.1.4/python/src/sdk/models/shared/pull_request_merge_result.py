from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PullRequestMergeResult:
    merged: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merged' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    
