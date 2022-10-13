from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class PostClickwrapsRequestBodyUseWithBundlesEnum(str, Enum):
    NONE = "none"
    AVAILABLE = "available"
    REQUIRE = "require"

class PostClickwrapsRequestBodyUseWithInboxesEnum(str, Enum):
    NONE = "none"
    AVAILABLE = "available"
    REQUIRE = "require"

class PostClickwrapsRequestBodyUseWithUsersEnum(str, Enum):
    NONE = "none"
    REQUIRE = "require"


@dataclass
class PostClickwrapsRequestBody:
    body: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'body' }})
    name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    use_with_bundles: Optional[PostClickwrapsRequestBodyUseWithBundlesEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'use_with_bundles' }})
    use_with_inboxes: Optional[PostClickwrapsRequestBodyUseWithInboxesEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'use_with_inboxes' }})
    use_with_users: Optional[PostClickwrapsRequestBodyUseWithUsersEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'use_with_users' }})
    

@dataclass
class PostClickwrapsRequest:
    request: Optional[PostClickwrapsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostClickwrapsResponse:
    clickwrap_entity: Optional[shared.ClickwrapEntity] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
