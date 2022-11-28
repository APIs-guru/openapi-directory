from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListWebAppsResponse:
    r"""ListWebAppsResponse
    Response to a request to list web apps for a given enterprise.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    web_apps: Optional[List[WebApp]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webApps') }})
    
