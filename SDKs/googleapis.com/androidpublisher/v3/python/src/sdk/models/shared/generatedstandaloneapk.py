from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GeneratedStandaloneApk:
    r"""GeneratedStandaloneApk
    Download metadata for a standalone APK.
    """
    
    download_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadId') }})
    variant_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variantId') }})
    
