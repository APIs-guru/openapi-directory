from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContactListDestination:
    r"""ContactListDestination
    An object that contains details about the action of a contact list.
    """
    
    contact_list_import_action: ContactListImportActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactListImportAction') }})
    contact_list_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactListName') }})
    
