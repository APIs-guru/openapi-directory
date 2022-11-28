from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Tag:
    r"""Tag
    A key:value pair associated with an AWS resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as \"environment\") and the tag value represents a specific value within that category (such as \"test,\" \"development,\" or \"production\"). You can add up to 50 tags to each AWS resource. 
    """
    
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
