from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import findingactiontype_enum
from . import apicalldetails


@dataclass_json
@dataclass
class FindingAction:
    action_type: Optional[findingactiontype_enum.FindingActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionType' }})
    api_call_details: Optional[apicalldetails.APICallDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiCallDetails' }})
    
