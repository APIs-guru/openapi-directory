from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Address:
    r"""Address
    A single IP address specification. This is used in the <a>MatchAttributes</a> source and destination specifications.
    """
    
    address_definition: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddressDefinition') }})
    
