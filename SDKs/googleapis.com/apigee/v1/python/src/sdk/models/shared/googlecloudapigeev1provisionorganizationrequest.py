from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ProvisionOrganizationRequest:
    analytics_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analyticsRegion' }})
    authorized_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizedNetwork' }})
    runtime_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeLocation' }})
    
