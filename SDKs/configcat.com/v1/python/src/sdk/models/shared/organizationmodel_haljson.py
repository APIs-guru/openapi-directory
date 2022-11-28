from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OrganizationModelHaljsonLinks:
    members: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    products: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    

@dataclass_json
@dataclass
class OrganizationModelHaljson:
    links: Optional[OrganizationModelHaljsonLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    organization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizationId') }})
    
