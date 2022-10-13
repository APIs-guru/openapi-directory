from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import applicationtransferparam


@dataclass_json
@dataclass
class ApplicationDataTransfer:
    application_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationId' }})
    application_transfer_params: Optional[List[applicationtransferparam.ApplicationTransferParam]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationTransferParams' }})
    application_transfer_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationTransferStatus' }})
    
