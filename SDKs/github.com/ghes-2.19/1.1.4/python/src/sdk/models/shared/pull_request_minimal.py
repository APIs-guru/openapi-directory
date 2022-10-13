from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PullRequestMinimalBaseRepo:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class PullRequestMinimalBase:
    ref: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ref' }})
    repo: PullRequestMinimalBaseRepo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    

@dataclass_json
@dataclass
class PullRequestMinimalHeadRepo:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class PullRequestMinimalHead:
    ref: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ref' }})
    repo: PullRequestMinimalHeadRepo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    

@dataclass_json
@dataclass
class PullRequestMinimal:
    base: PullRequestMinimalBase = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base' }})
    head: PullRequestMinimalHead = field(default=None, metadata={'dataclasses_json': { 'field_name': 'head' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
