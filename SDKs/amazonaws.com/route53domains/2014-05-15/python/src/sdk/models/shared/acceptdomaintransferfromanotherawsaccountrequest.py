from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AcceptDomainTransferFromAnotherAwsAccountRequest:
    r"""AcceptDomainTransferFromAnotherAwsAccountRequest
    The AcceptDomainTransferFromAnotherAwsAccount request includes the following elements.
    """
    
    domain_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    
