from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateProjectInput:
    project_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectName') }})
    service_catalog_provisioning_details: ServiceCatalogProvisioningDetails = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceCatalogProvisioningDetails') }})
    project_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectDescription') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
