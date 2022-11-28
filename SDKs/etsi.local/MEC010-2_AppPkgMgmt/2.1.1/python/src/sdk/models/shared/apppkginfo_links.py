from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AppPkgInfoLinks:
    r"""AppPkgInfoLinks
    Links to resources related to this resource.
    """
    
    app_d: LinkType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appD') }})
    app_pkg_content: LinkType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appPkgContent') }})
    self: LinkType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
