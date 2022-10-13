from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import functioneventinvokeconfig


@dataclass_json
@dataclass
class ListFunctionEventInvokeConfigsResponse:
    function_event_invoke_configs: Optional[List[functioneventinvokeconfig.FunctionEventInvokeConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FunctionEventInvokeConfigs' }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    
