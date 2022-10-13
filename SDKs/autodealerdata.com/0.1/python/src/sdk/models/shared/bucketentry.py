from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BucketEntry:
    bucket: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucket' }})
    model_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelName' }})
    percent_of_market: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentOfMarket' }})
    
