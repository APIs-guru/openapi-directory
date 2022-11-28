from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BuildingAddress:
    r"""BuildingAddress
    Public API: Resources.buildings
    """
    
    address_lines: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressLines') }})
    administrative_area: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('administrativeArea') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    locality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locality') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCode') }})
    sublocality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sublocality') }})
    
