from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VisualReferenceOutput:
    r"""VisualReferenceOutput
    <p>If this canary performs visual monitoring by comparing screenshots, this structure contains the ID of the canary run that is used as the baseline for screenshots, and the coordinates of any parts of those screenshots that are ignored during visual monitoring comparison.</p> <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later.</p>
    """
    
    base_canary_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaseCanaryRunId') }})
    base_screenshots: Optional[List[BaseScreenshot]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaseScreenshots') }})
    
