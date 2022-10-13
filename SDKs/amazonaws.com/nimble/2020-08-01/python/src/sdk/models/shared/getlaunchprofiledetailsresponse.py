from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import launchprofile
from . import streamingimage
from . import studiocomponentsummary


@dataclass_json
@dataclass
class GetLaunchProfileDetailsResponse:
    launch_profile: Optional[launchprofile.LaunchProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchProfile' }})
    streaming_images: Optional[List[streamingimage.StreamingImage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamingImages' }})
    studio_component_summaries: Optional[List[studiocomponentsummary.StudioComponentSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studioComponentSummaries' }})
    
