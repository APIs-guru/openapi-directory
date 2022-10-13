from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FileCommitCommitAuthor:
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class FileCommitCommitCommitter:
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class FileCommitCommitParents:
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    sha: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class FileCommitCommitTree:
    sha: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class FileCommitCommitVerification:
    payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signature' }})
    verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verified' }})
    

@dataclass_json
@dataclass
class FileCommitCommit:
    author: Optional[FileCommitCommitAuthor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    committer: Optional[FileCommitCommitCommitter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committer' }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    parents: Optional[List[FileCommitCommitParents]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parents' }})
    sha: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    tree: Optional[FileCommitCommitTree] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tree' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    verification: Optional[FileCommitCommitVerification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verification' }})
    

@dataclass_json
@dataclass
class FileCommitContentLinks:
    git: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git' }})
    html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html' }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class FileCommitContent:
    links: Optional[FileCommitContentLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_url' }})
    git_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git_url' }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    sha: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class FileCommit:
    commit: FileCommitCommit = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit' }})
    content: FileCommitContent = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    
