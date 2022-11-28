from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TransferDomainToAnotherAwsAccountResponse:
    r"""TransferDomainToAnotherAwsAccountResponse
    The <code>TransferDomainToAnotherAwsAccount</code> response includes the following elements.
    """
    
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OperationId') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    
