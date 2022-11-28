from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListMavenArtifactsResponse:
    r"""ListMavenArtifactsResponse
    The response from listing maven artifacts.
    """
    
    maven_artifacts: Optional[List[MavenArtifact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mavenArtifacts') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
