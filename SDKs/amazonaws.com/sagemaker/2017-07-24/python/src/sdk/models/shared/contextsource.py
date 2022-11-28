from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ContextSource:
    r"""ContextSource
    A structure describing the source of a context.
    """
    
    source_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceUri') }})
    source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceId') }})
    source_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceType') }})
    
