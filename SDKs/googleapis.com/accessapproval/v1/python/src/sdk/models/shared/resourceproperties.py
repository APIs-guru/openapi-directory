from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResourceProperties:
    r"""ResourceProperties
    The properties associated with the resource of the request.
    """
    
    excludes_descendants: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludesDescendants') }})
    
