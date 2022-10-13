from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import contactlistimportaction_enum


@dataclass_json
@dataclass
class ContactListDestination:
    contact_list_import_action: contactlistimportaction_enum.ContactListImportActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactListImportAction' }})
    contact_list_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactListName' }})
    
