from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RetrieveDomainAuthCodeRequest:
    r"""RetrieveDomainAuthCodeRequest
    A request for the authorization code for the specified domain. To transfer a domain to another registrar, you provide this value to the new registrar.
    """
    
    domain_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    
