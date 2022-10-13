from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import terminologyproperties


@dataclass_json
@dataclass
class ListTerminologiesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    terminology_properties_list: Optional[List[terminologyproperties.TerminologyProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TerminologyPropertiesList' }})
    
