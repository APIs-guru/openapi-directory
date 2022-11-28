from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Track:
    track: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('track') }})
    user_fraction: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userFraction') }})
    version_codes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionCodes') }})
    
