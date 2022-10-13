from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import createassociationbatchrequestentry


@dataclass_json
@dataclass
class CreateAssociationBatchRequest:
    entries: List[createassociationbatchrequestentry.CreateAssociationBatchRequestEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entries' }})
    
