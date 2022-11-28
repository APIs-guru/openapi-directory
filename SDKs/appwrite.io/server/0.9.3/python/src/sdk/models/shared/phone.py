from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Phone:
    r"""Phone
    Phone
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    country_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    country_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryName') }})
    
