from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MapConfiguration:
    r"""MapConfiguration
    Specifies the map tile style selected from an available provider.
    """
    
    style: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Style') }})
    
