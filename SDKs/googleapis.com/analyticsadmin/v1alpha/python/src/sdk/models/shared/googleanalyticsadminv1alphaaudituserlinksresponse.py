from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAuditUserLinksResponse:
    r"""GoogleAnalyticsAdminV1alphaAuditUserLinksResponse
    Response message for AuditUserLinks RPC.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    user_links: Optional[List[GoogleAnalyticsAdminV1alphaAuditUserLink]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLinks') }})
    
