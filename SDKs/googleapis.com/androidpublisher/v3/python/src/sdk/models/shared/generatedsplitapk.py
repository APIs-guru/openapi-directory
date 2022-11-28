from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GeneratedSplitApk:
    r"""GeneratedSplitApk
    Download metadata for a split APK.
    """
    
    download_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadId') }})
    module_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moduleName') }})
    split_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('splitId') }})
    variant_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variantId') }})
    
