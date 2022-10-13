from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import minimal_repository
from . import simple_commit_status


@dataclass_json
@dataclass
class CombinedCommitStatus:
    commit_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit_url' }})
    repository: minimal_repository.MinimalRepository = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    state: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    statuses: List[simple_commit_status.SimpleCommitStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statuses' }})
    total_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
