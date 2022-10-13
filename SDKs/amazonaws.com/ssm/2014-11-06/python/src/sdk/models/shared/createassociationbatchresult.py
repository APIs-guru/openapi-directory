from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import failedcreateassociation
from . import associationdescription


@dataclass_json
@dataclass
class CreateAssociationBatchResult:
    failed: Optional[List[failedcreateassociation.FailedCreateAssociation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Failed' }})
    successful: Optional[List[associationdescription.AssociationDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Successful' }})
    
