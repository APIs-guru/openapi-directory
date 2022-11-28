from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PullRequestMinimalBaseRepo:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class PullRequestMinimalBase:
    ref: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref') }})
    repo: PullRequestMinimalBaseRepo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo') }})
    sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    

@dataclass_json
@dataclass
class PullRequestMinimalHeadRepo:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class PullRequestMinimalHead:
    ref: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref') }})
    repo: PullRequestMinimalHeadRepo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo') }})
    sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    

@dataclass_json
@dataclass
class PullRequestMinimal:
    base: PullRequestMinimalBase = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('base') }})
    head: PullRequestMinimalHead = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('head') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
