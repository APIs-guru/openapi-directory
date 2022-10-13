from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import clientpropertiesresult


@dataclass_json
@dataclass
class DescribeClientPropertiesResult:
    client_properties_list: Optional[List[clientpropertiesresult.ClientPropertiesResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientPropertiesList' }})
    
