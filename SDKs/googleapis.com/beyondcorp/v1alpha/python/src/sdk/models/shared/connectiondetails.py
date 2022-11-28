from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConnectionDetails:
    r"""ConnectionDetails
    Details of the Connection.
    """
    
    connection: Optional[Connection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection') }})
    recent_mig_vms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recentMigVms') }})
    
