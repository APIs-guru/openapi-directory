from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AttackProperty:
    r"""AttackProperty
    Details of a Shield event. This is provided as part of an <a>AttackDetail</a>.
    """
    
    attack_layer: Optional[AttackLayerEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttackLayer') }})
    attack_property_identifier: Optional[AttackPropertyIdentifierEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttackPropertyIdentifier') }})
    top_contributors: Optional[List[Contributor]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopContributors') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Total') }})
    unit: Optional[UnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unit') }})
    
