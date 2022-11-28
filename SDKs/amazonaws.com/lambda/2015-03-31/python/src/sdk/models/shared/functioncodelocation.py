from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FunctionCodeLocation:
    r"""FunctionCodeLocation
    Details about a function's deployment package.
    """
    
    image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageUri') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    repository_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepositoryType') }})
    resolved_image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolvedImageUri') }})
    
