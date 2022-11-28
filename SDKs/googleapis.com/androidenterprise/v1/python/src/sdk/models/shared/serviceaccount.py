from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServiceAccount:
    r"""ServiceAccount
    A service account identity, including the name and credentials that can be used to authenticate as the service account.
    """
    
    key: Optional[ServiceAccountKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
