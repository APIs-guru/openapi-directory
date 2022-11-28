from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TagsModel:
    r"""TagsModel
    Specifies the tags (keys and values) for an application, campaign, message template, or segment.
    """
    
    tags: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
