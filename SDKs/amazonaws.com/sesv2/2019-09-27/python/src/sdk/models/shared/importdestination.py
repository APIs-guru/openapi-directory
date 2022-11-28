from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImportDestination:
    r"""ImportDestination
    An object that contains details about the resource destination the import job is going to target.
    """
    
    contact_list_destination: Optional[ContactListDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactListDestination') }})
    suppression_list_destination: Optional[SuppressionListDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuppressionListDestination') }})
    
