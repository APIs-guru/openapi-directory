from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GitCommitAuthor:
    r"""GitCommitAuthor
    Identifying information for the git-user
    """
    
    date_: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class GitCommitCommitter:
    r"""GitCommitCommitter
    Identifying information for the git-user
    """
    
    date_: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class GitCommitParents:
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class GitCommitTree:
    sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class GitCommitVerification:
    payload: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    reason: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    signature: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature') }})
    verified: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verified') }})
    

@dataclass_json
@dataclass
class GitCommit:
    r"""GitCommit
    Low-level Git commit operations within a repository
    """
    
    author: GitCommitAuthor = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    committer: GitCommitCommitter = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('committer') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    parents: List[GitCommitParents] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parents') }})
    sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    tree: GitCommitTree = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tree') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    verification: GitCommitVerification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verification') }})
    
