from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PullRequestMergeResult:
    r"""PullRequestMergeResult
    Pull Request Merge Result
    """
    
    merged: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merged') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    
