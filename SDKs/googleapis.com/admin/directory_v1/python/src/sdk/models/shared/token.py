from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Token:
    r"""Token
    JSON template for token resource in Directory API.
    """
    
    anonymous: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anonymous') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    display_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayText') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    native_app: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nativeApp') }})
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    user_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userKey') }})
    
