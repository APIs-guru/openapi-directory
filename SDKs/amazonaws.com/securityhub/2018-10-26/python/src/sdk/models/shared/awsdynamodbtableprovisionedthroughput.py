from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsDynamoDbTableProvisionedThroughput:
    last_decrease_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastDecreaseDateTime' }})
    last_increase_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastIncreaseDateTime' }})
    number_of_decreases_today: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfDecreasesToday' }})
    read_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReadCapacityUnits' }})
    write_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WriteCapacityUnits' }})
    
