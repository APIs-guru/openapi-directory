from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BucketEntry:
    bucket: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket') }})
    model_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelName') }})
    percent_of_market: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentOfMarket') }})
    
