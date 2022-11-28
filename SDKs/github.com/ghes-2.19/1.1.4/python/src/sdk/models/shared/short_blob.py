from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ShortBlob:
    r"""ShortBlob
    Short Blob
    """
    
    sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
