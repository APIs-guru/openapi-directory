from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsAPICallActionDomainDetails:
    r"""AwsAPICallActionDomainDetails
    Provided if <code>CallerType</code> is <code>domain</code>. It provides information about the DNS domain that issued the API call.
    """
    
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domain') }})
    
