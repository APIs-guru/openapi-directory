from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Place:
    r"""Place
    Contains details about addresses or points of interest that match the search criteria.
    """
    
    geometry: PlaceGeometry = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Geometry') }})
    address_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddressNumber') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Label') }})
    municipality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Municipality') }})
    neighborhood: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Neighborhood') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalCode') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Region') }})
    street: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Street') }})
    sub_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubRegion') }})
    
