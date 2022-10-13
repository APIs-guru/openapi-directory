from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import minimal_repository
from . import pull_request_minimal
from . import minimal_repository


@dataclass_json
@dataclass
class WorkflowRunHeadCommitAuthor:
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class WorkflowRunHeadCommitCommitter:
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class WorkflowRunHeadCommitSimpleCommit:
    author: WorkflowRunHeadCommitAuthor = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    committer: WorkflowRunHeadCommitCommitter = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committer' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tree_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tree_id' }})
    

@dataclass_json
@dataclass
class WorkflowRun:
    artifacts_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifacts_url' }})
    cancel_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancel_url' }})
    check_suite_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check_suite_id' }})
    check_suite_node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check_suite_node_id' }})
    check_suite_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check_suite_url' }})
    conclusion: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conclusion' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    head_branch: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'head_branch' }})
    head_commit: WorkflowRunHeadCommitSimpleCommit = field(default=None, metadata={'dataclasses_json': { 'field_name': 'head_commit' }})
    head_repository: minimal_repository.MinimalRepository = field(default=None, metadata={'dataclasses_json': { 'field_name': 'head_repository' }})
    head_repository_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'head_repository_id' }})
    head_sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'head_sha' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    jobs_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobs_url' }})
    logs_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logs_url' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    pull_requests: List[pull_request_minimal.PullRequestMinimal] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pull_requests' }})
    repository: minimal_repository.MinimalRepository = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    rerun_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rerun_url' }})
    run_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run_number' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    workflow_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflow_id' }})
    workflow_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflow_url' }})
    
