from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ApkBinary:
    r"""ApkBinary
    Represents the binary payload of an APK.
    """
    
    sha1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha1') }})
    sha256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha256') }})
    
