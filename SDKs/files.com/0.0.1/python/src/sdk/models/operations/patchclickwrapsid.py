from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class PatchClickwrapsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PatchClickwrapsIDRequestBodyUseWithBundlesEnum(str, Enum):
    NONE = "none"
    AVAILABLE = "available"
    REQUIRE = "require"

class PatchClickwrapsIDRequestBodyUseWithInboxesEnum(str, Enum):
    NONE = "none"
    AVAILABLE = "available"
    REQUIRE = "require"

class PatchClickwrapsIDRequestBodyUseWithUsersEnum(str, Enum):
    NONE = "none"
    REQUIRE = "require"


@dataclass
class PatchClickwrapsIDRequestBody:
    body: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'body' }})
    name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    use_with_bundles: Optional[PatchClickwrapsIDRequestBodyUseWithBundlesEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'use_with_bundles' }})
    use_with_inboxes: Optional[PatchClickwrapsIDRequestBodyUseWithInboxesEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'use_with_inboxes' }})
    use_with_users: Optional[PatchClickwrapsIDRequestBodyUseWithUsersEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'use_with_users' }})
    

@dataclass
class PatchClickwrapsIDRequest:
    path_params: PatchClickwrapsIDPathParams = field(default=None)
    request: Optional[PatchClickwrapsIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PatchClickwrapsIDResponse:
    clickwrap_entity: Optional[shared.ClickwrapEntity] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
