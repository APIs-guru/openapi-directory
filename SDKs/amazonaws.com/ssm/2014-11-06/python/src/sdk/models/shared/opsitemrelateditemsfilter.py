from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import opsitemrelateditemsfilterkey_enum
from . import opsitemrelateditemsfilteroperator_enum


@dataclass_json
@dataclass
class OpsItemRelatedItemsFilter:
    key: opsitemrelateditemsfilterkey_enum.OpsItemRelatedItemsFilterKeyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    operator: opsitemrelateditemsfilteroperator_enum.OpsItemRelatedItemsFilterOperatorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Operator' }})
    values: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    
