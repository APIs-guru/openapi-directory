from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BaseScreenshot:
    r"""BaseScreenshot
    A structure representing a screenshot that is used as a baseline during visual monitoring comparisons made by the canary.
    """
    
    screenshot_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScreenshotName') }})
    ignore_coordinates: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IgnoreCoordinates') }})
    
