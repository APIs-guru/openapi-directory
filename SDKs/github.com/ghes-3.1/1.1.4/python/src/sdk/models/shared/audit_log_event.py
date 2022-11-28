from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AuditLogEvent:
    at_timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@timestamp') }})
    document_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_document_id') }})
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    active_was: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active_was') }})
    actor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actor') }})
    blocked_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked_user') }})
    business: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business') }})
    config: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    config_was: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config_was') }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_type') }})
    created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    deploy_key_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploy_key_fingerprint') }})
    emoji: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emoji') }})
    events: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    events_were: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events_were') }})
    explanation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explanation') }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    hook_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hook_id') }})
    limited_availability: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limited_availability') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    old_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('old_user') }})
    openssh_public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openssh_public_key') }})
    org: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('org') }})
    previous_visibility: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_visibility') }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('read_only') }})
    repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo') }})
    repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    repository_public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository_public') }})
    target_login: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_login') }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    transport_protocol: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transport_protocol') }})
    transport_protocol_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transport_protocol_name') }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    visibility: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    
