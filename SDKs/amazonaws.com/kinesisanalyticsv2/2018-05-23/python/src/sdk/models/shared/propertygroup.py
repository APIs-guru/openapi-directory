from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PropertyGroup:
    r"""PropertyGroup
    Property key-value pairs passed into an application.
    """
    
    property_group_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PropertyGroupId') }})
    property_map: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PropertyMap') }})
    
