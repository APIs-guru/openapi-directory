from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ActionsPublicKey:
    r"""ActionsPublicKey
    The public key used for setting Actions Secrets.
    """
    
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    key_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key_id') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
