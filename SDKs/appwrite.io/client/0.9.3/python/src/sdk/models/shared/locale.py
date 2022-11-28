from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Locale:
    r"""Locale
    Locale
    """
    
    continent: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('continent') }})
    continent_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('continentCode') }})
    country: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    country_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    eu: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eu') }})
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    
