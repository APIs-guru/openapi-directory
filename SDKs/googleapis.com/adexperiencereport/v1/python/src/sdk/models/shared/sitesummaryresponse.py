from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import platformsummary
from . import platformsummary


@dataclass_json
@dataclass
class SiteSummaryResponse:
    desktop_summary: Optional[platformsummary.PlatformSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desktopSummary' }})
    mobile_summary: Optional[platformsummary.PlatformSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileSummary' }})
    reviewed_site: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewedSite' }})
    
