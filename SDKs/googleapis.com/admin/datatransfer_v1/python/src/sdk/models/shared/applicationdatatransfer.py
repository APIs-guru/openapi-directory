from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApplicationDataTransfer:
    r"""ApplicationDataTransfer
    Template to map fields of ApplicationDataTransfer resource.
    """
    
    application_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationId') }})
    application_transfer_params: Optional[List[ApplicationTransferParam]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationTransferParams') }})
    application_transfer_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationTransferStatus') }})
    
