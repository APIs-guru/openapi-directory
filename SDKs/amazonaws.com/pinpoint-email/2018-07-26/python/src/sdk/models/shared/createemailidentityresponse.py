from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dkimattributes
from . import identitytype_enum


@dataclass_json
@dataclass
class CreateEmailIdentityResponse:
    dkim_attributes: Optional[dkimattributes.DkimAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DkimAttributes' }})
    identity_type: Optional[identitytype_enum.IdentityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityType' }})
    verified_for_sending_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VerifiedForSendingStatus' }})
    
