from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListStudioComponentsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    studio_components: Optional[List[StudioComponent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studioComponents') }})
    
