from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AppEdit:
    r"""AppEdit
    Represents an edit of an app. An edit allows clients to make multiple changes before committing them in one operation.
    """
    
    expiry_time_seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiryTimeSeconds') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
