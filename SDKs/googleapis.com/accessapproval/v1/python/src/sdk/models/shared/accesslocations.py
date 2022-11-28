from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccessLocations:
    r"""AccessLocations
    Home office and physical location of the principal.
    """
    
    principal_office_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principalOfficeCountry') }})
    principal_physical_location_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principalPhysicalLocationCountry') }})
    
