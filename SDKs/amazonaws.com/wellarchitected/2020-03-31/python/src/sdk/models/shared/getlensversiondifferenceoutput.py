from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetLensVersionDifferenceOutput:
    base_lens_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaseLensVersion') }})
    latest_lens_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestLensVersion') }})
    lens_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LensAlias') }})
    version_differences: Optional[VersionDifferences] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VersionDifferences') }})
    
