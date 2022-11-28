from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeviceSpec:
    r"""DeviceSpec
    The device spec used to generate a system APK.
    """
    
    screen_density: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenDensity') }})
    supported_abis: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedAbis') }})
    supported_locales: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedLocales') }})
    
