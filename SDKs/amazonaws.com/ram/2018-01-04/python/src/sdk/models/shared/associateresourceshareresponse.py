from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssociateResourceShareResponse:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    resource_share_associations: Optional[List[ResourceShareAssociation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceShareAssociations') }})
    
