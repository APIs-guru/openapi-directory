from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import attacklayer_enum
from . import attackpropertyidentifier_enum
from . import contributor
from . import unit_enum


@dataclass_json
@dataclass
class AttackProperty:
    attack_layer: Optional[attacklayer_enum.AttackLayerEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttackLayer' }})
    attack_property_identifier: Optional[attackpropertyidentifier_enum.AttackPropertyIdentifierEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttackPropertyIdentifier' }})
    top_contributors: Optional[List[contributor.Contributor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TopContributors' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Total' }})
    unit: Optional[unit_enum.UnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Unit' }})
    
