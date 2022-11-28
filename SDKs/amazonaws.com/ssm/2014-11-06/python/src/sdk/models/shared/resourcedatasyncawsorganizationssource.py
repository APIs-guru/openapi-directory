from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceDataSyncAwsOrganizationsSource:
    r"""ResourceDataSyncAwsOrganizationsSource
    Information about the <code>AwsOrganizationsSource</code> resource data sync source. A sync source of this type can synchronize data from Organizations or, if an Amazon Web Services organization isn't present, from multiple Amazon Web Services Regions.
    """
    
    organization_source_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationSourceType') }})
    organizational_units: Optional[List[ResourceDataSyncOrganizationalUnit]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationalUnits') }})
    
