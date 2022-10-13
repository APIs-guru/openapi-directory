from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contactlistdestination
from . import suppressionlistdestination


@dataclass_json
@dataclass
class ImportDestination:
    contact_list_destination: Optional[contactlistdestination.ContactListDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactListDestination' }})
    suppression_list_destination: Optional[suppressionlistdestination.SuppressionListDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuppressionListDestination' }})
    
