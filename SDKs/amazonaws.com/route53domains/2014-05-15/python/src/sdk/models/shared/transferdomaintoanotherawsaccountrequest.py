from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TransferDomainToAnotherAwsAccountRequest:
    r"""TransferDomainToAnotherAwsAccountRequest
    The TransferDomainToAnotherAwsAccount request includes the following elements.
    """
    
    account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    domain_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    
