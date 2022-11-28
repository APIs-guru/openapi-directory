from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ChefConfiguration:
    r"""ChefConfiguration
    Describes the Chef configuration.
    """
    
    berkshelf_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BerkshelfVersion') }})
    manage_berkshelf: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ManageBerkshelf') }})
    
