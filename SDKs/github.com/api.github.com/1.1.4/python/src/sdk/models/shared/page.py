from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PageStatusEnum(str, Enum):
    BUILT = "built"
    BUILDING = "building"
    ERRORED = "errored"


@dataclass_json
@dataclass
class Page:
    r"""Page
    The configuration for GitHub Pages for a repository.
    """
    
    cname: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cname') }})
    custom_404: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_404') }})
    public: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    status: PageStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    source: Optional[PagesSourceHash] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
