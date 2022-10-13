from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import basescreenshot


@dataclass_json
@dataclass
class VisualReferenceOutput:
    base_canary_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaseCanaryRunId' }})
    base_screenshots: Optional[List[basescreenshot.BaseScreenshot]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaseScreenshots' }})
    
