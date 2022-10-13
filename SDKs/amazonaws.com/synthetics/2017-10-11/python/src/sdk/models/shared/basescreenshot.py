from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BaseScreenshot:
    ignore_coordinates: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IgnoreCoordinates' }})
    screenshot_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScreenshotName' }})
    
