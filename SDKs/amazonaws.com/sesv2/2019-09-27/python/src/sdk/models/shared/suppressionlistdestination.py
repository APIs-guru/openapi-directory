from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SuppressionListDestination:
    r"""SuppressionListDestination
    An object that contains details about the action of suppression list.
    """
    
    suppression_list_import_action: SuppressionListImportActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuppressionListImportAction') }})
    
