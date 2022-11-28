from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IssueEventForIssue:
    r"""IssueEventForIssue
    Issue Event for Issue
    """
    
    actor: Optional[SimpleUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actor') }})
    author_association: Optional[AuthorAssociationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author_association') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    body_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_html') }})
    body_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_text') }})
    commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_id') }})
    commit_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_url') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    event: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    issue_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issue_url') }})
    lock_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lock_reason') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    pull_request_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pull_request_url') }})
    sha: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    submitted_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submitted_at') }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
