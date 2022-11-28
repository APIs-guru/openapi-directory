from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DiffEntry:
    r"""DiffEntry
    Diff Entry
    """
    
    additions: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('additions') }})
    blob_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blob_url') }})
    changes: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('changes') }})
    contents_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents_url') }})
    deletions: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletions') }})
    filename: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    raw_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('raw_url') }})
    sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    patch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patch') }})
    previous_filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_filename') }})
    
