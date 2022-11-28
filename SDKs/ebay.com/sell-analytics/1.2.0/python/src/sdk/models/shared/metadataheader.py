from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MetadataHeader:
    r"""MetadataHeader
    Type that defines the metadata header fields.
    """
    
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    metadata_keys: Optional[List[Definition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataKeys') }})
    
