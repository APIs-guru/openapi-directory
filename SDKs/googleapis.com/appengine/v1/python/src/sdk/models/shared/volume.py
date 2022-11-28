from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Volume:
    r"""Volume
    Volumes mounted within the app container. Only applicable in the App Engine flexible environment.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    size_gb: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeGb') }})
    volume_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeType') }})
    
