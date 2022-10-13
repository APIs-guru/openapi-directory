from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import createassociationbatchrequestentry
from . import fault_enum


@dataclass_json
@dataclass
class FailedCreateAssociation:
    entry: Optional[createassociationbatchrequestentry.CreateAssociationBatchRequestEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entry' }})
    fault: Optional[fault_enum.FaultEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Fault' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    
