from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CompositeModelProperty:
    r"""CompositeModelProperty
    Contains information about a composite model property on an asset.
    """
    
    asset_property: Property = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetProperty') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
