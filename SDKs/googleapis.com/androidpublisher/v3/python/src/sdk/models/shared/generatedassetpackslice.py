from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GeneratedAssetPackSlice:
    r"""GeneratedAssetPackSlice
    Download metadata for an asset pack slice.
    """
    
    download_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadId') }})
    module_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moduleName') }})
    slice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sliceId') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
