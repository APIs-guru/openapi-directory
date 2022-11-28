from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Bundle:
    r"""Bundle
    Information about an app bundle. The resource for BundlesService.
    """
    
    sha1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha1') }})
    sha256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha256') }})
    version_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionCode') }})
    
