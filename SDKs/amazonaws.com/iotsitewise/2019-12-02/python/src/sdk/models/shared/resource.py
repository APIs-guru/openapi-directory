from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Resource:
    r"""Resource
    Contains an IoT SiteWise Monitor resource ID for a portal or project.
    """
    
    portal: Optional[PortalResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portal') }})
    project: Optional[ProjectResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    
