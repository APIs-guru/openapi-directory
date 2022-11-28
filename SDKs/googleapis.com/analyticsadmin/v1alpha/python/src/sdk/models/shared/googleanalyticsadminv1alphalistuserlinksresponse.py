from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListUserLinksResponse:
    r"""GoogleAnalyticsAdminV1alphaListUserLinksResponse
    Response message for ListUserLinks RPC.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    user_links: Optional[List[GoogleAnalyticsAdminV1alphaUserLink]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLinks') }})
    
