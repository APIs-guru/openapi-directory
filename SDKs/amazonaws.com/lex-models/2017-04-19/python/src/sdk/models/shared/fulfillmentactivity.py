from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import codehook
from . import fulfillmentactivitytype_enum


@dataclass_json
@dataclass
class FulfillmentActivity:
    code_hook: Optional[codehook.CodeHook] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codeHook' }})
    type: fulfillmentactivitytype_enum.FulfillmentActivityTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
