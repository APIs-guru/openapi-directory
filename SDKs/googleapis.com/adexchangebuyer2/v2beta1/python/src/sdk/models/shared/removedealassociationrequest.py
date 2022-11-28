from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RemoveDealAssociationRequest:
    r"""RemoveDealAssociationRequest
    A request for removing the association between a deal and a creative.
    """
    
    association: Optional[CreativeDealAssociation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('association') }})
    
