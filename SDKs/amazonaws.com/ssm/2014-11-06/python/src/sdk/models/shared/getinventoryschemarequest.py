from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetInventorySchemaRequest:
    aggregator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Aggregator' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    sub_type: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubType' }})
    type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TypeName' }})
    
