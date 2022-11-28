from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WebPropertySummary:
    r"""WebPropertySummary
    JSON template for an Analytics WebPropertySummary. WebPropertySummary returns basic information (i.e., summary) for a web property.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    internal_web_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalWebPropertyId') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    profiles: Optional[List[ProfileSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profiles') }})
    starred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred') }})
    website_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websiteUrl') }})
    
