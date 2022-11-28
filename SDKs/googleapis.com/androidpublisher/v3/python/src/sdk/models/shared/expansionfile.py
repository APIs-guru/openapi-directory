from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExpansionFile:
    r"""ExpansionFile
    An expansion file. The resource for ExpansionFilesService.
    """
    
    file_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileSize') }})
    references_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referencesVersion') }})
    
