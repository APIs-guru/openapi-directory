from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResolveCustomerRequest:
    r"""ResolveCustomerRequest
    Contains input to the ResolveCustomer operation.
    """
    
    registration_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistrationToken') }})
    
