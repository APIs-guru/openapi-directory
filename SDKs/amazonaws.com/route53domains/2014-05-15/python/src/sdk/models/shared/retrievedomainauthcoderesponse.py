from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RetrieveDomainAuthCodeResponse:
    r"""RetrieveDomainAuthCodeResponse
    The RetrieveDomainAuthCode response includes the following element.
    """
    
    auth_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthCode') }})
    
