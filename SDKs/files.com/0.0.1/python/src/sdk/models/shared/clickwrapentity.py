from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ClickwrapEntityUseWithBundlesEnum(str, Enum):
    NONE = "none"
    AVAILABLE = "available"
    REQUIRE = "require"

class ClickwrapEntityUseWithInboxesEnum(str, Enum):
    NONE = "none"
    AVAILABLE = "available"
    REQUIRE = "require"

class ClickwrapEntityUseWithUsersEnum(str, Enum):
    NONE = "none"
    REQUIRE = "require"


@dataclass_json
@dataclass
class ClickwrapEntity:
    r"""ClickwrapEntity
    Create Clickwrap
    """
    
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    use_with_bundles: Optional[ClickwrapEntityUseWithBundlesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_with_bundles') }})
    use_with_inboxes: Optional[ClickwrapEntityUseWithInboxesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_with_inboxes') }})
    use_with_users: Optional[ClickwrapEntityUseWithUsersEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_with_users') }})
    
