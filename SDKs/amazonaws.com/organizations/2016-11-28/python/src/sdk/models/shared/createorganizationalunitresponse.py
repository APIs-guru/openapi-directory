from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import organizationalunit


@dataclass_json
@dataclass
class CreateOrganizationalUnitResponse:
    organizational_unit: Optional[organizationalunit.OrganizationalUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationalUnit' }})
    
