from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    use_with_bundles: Optional[ClickwrapEntityUseWithBundlesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'use_with_bundles' }})
    use_with_inboxes: Optional[ClickwrapEntityUseWithInboxesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'use_with_inboxes' }})
    use_with_users: Optional[ClickwrapEntityUseWithUsersEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'use_with_users' }})
    
