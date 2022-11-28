from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse:
    r"""GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse
    Response message for ListFirebaseLinks RPC
    """
    
    firebase_links: Optional[List[GoogleAnalyticsAdminV1alphaFirebaseLink]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firebaseLinks') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
