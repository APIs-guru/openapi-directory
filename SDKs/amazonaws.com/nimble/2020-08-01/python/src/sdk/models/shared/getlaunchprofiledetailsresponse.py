from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetLaunchProfileDetailsResponse:
    launch_profile: Optional[LaunchProfile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchProfile') }})
    streaming_images: Optional[List[StreamingImage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamingImages') }})
    studio_component_summaries: Optional[List[StudioComponentSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studioComponentSummaries') }})
    
