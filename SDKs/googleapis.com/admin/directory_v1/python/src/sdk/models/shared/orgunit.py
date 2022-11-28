from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OrgUnit:
    r"""OrgUnit
    Managing your account's organizational units allows you to configure your users' access to services and custom settings. For more information about common organizational unit tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-org-units.html). The customer's organizational unit hierarchy is limited to 35 levels of depth.
    """
    
    block_inheritance: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockInheritance') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    org_unit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgUnitId') }})
    org_unit_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgUnitPath') }})
    parent_org_unit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentOrgUnitId') }})
    parent_org_unit_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentOrgUnitPath') }})
    
