from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse:
    r"""GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse
    Response message for BatchCreateUserLinks RPC.
    """
    
    user_links: Optional[List[GoogleAnalyticsAdminV1alphaUserLink]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLinks') }})
    
