from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OrganizationExportRequest:
    r"""OrganizationExportRequest
    An *organization_export* request starts a job to export the complete data of the given Organization.
    """
    
    organization: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization') }})
    
