from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListSecurityReportsResponse:
    r"""GoogleCloudApigeeV1ListSecurityReportsResponse
    The response for SecurityReports.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    security_reports: Optional[List[GoogleCloudApigeeV1SecurityReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityReports') }})
    
