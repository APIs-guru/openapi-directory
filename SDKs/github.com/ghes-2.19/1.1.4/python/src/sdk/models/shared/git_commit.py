from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GitCommitAuthor:
    date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class GitCommitCommitter:
    date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class GitCommitParents:
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class GitCommitTree:
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class GitCommitVerification:
    payload: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    reason: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    signature: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signature' }})
    verified: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verified' }})
    

@dataclass_json
@dataclass
class GitCommit:
    author: GitCommitAuthor = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    committer: GitCommitCommitter = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committer' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    parents: List[GitCommitParents] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parents' }})
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    tree: GitCommitTree = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tree' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    verification: GitCommitVerification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verification' }})
    
