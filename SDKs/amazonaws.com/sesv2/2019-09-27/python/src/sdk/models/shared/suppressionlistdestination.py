from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import suppressionlistimportaction_enum


@dataclass_json
@dataclass
class SuppressionListDestination:
    suppression_list_import_action: suppressionlistimportaction_enum.SuppressionListImportActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuppressionListImportAction' }})
    
