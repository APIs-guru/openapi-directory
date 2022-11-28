from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CustomPluginFileDescription:
    r"""CustomPluginFileDescription
    Details about a custom plugin file.
    """
    
    file_md5: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileMd5') }})
    file_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileSize') }})
    
