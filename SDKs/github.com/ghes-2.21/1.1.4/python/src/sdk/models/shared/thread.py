from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import minimal_repository


@dataclass_json
@dataclass
class ThreadSubject:
    latest_comment_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latest_comment_url' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class Thread:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_read_at: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_read_at' }})
    reason: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    repository: minimal_repository.MinimalRepository = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    subject: ThreadSubject = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject' }})
    subscription_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscription_url' }})
    unread: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unread' }})
    updated_at: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
