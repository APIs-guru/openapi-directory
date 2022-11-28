from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TagFilter:
    r"""TagFilter
    Used to filter the workflow executions in visibility APIs based on a tag.
    """
    
    tag: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    
