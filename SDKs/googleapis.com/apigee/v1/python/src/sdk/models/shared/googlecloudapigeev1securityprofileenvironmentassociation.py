from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation:
    r"""GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation
    Represents a SecurityProfileEnvironmentAssociation resource.
    """
    
    attach_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    security_profile_revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityProfileRevisionId') }})
    

@dataclass_json
@dataclass
class GoogleCloudApigeeV1SecurityProfileEnvironmentAssociationInput:
    r"""GoogleCloudApigeeV1SecurityProfileEnvironmentAssociationInput
    Represents a SecurityProfileEnvironmentAssociation resource.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    security_profile_revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityProfileRevisionId') }})
    
