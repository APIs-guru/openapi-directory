from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ZipInfo:
    r"""ZipInfo
    The zip file information for a zip deployment.
    """
    
    files_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filesCount') }})
    source_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceUrl') }})
    
