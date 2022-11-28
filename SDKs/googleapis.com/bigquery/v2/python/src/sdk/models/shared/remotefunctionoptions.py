from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RemoteFunctionOptions:
    r"""RemoteFunctionOptions
    Options for a remote user-defined function.
    """
    
    connection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection') }})
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    max_batching_rows: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxBatchingRows') }})
    user_defined_context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userDefinedContext') }})
    
