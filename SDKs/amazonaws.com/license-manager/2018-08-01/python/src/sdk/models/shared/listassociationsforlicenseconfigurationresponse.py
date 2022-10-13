from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import licenseconfigurationassociation


@dataclass_json
@dataclass
class ListAssociationsForLicenseConfigurationResponse:
    license_configuration_associations: Optional[List[licenseconfigurationassociation.LicenseConfigurationAssociation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseConfigurationAssociations' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
