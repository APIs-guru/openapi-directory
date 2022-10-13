from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import enumerationvalue
from . import slottypeconfiguration
from . import slotvalueselectionstrategy_enum


@dataclass_json
@dataclass
class CreateSlotTypeVersionResponse:
    checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checksum' }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    enumeration_values: Optional[List[enumerationvalue.EnumerationValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enumerationValues' }})
    last_updated_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_slot_type_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentSlotTypeSignature' }})
    slot_type_configurations: Optional[List[slottypeconfiguration.SlotTypeConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotTypeConfigurations' }})
    value_selection_strategy: Optional[slotvalueselectionstrategy_enum.SlotValueSelectionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueSelectionStrategy' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
