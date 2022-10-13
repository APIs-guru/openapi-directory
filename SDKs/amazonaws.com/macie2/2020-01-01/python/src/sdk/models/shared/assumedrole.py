from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sessioncontext


@dataclass_json
@dataclass
class AssumedRole:
    access_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessKeyId' }})
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    principal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principalId' }})
    session_context: Optional[sessioncontext.SessionContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionContext' }})
    
