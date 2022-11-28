from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SiteSummaryResponse:
    r"""SiteSummaryResponse
    Response message for GetSiteSummary.
    """
    
    desktop_summary: Optional[PlatformSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desktopSummary') }})
    mobile_summary: Optional[PlatformSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileSummary') }})
    reviewed_site: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewedSite') }})
    
