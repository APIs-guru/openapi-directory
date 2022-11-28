from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ProvisionOrganizationRequest:
    r"""GoogleCloudApigeeV1ProvisionOrganizationRequest
    Request for ProvisionOrganization.
    """
    
    analytics_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyticsRegion') }})
    authorized_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedNetwork') }})
    runtime_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeLocation') }})
    
