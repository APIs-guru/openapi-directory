from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Printer:
    r"""Printer
    Printer configuration.
    """
    
    auxiliary_messages: Optional[List[AuxiliaryMessage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auxiliaryMessages') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    make_and_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('makeAndModel') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    org_unit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgUnitId') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    use_driverless_config: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useDriverlessConfig') }})
    

@dataclass_json
@dataclass
class PrinterInput:
    r"""PrinterInput
    Printer configuration.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    make_and_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('makeAndModel') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    org_unit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgUnitId') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    use_driverless_config: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useDriverlessConfig') }})
    
