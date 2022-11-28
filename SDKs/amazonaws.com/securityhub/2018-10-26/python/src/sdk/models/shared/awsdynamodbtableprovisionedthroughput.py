from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsDynamoDbTableProvisionedThroughput:
    r"""AwsDynamoDbTableProvisionedThroughput
    Information about the provisioned throughput for the table or for a global secondary index.
    """
    
    last_decrease_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastDecreaseDateTime') }})
    last_increase_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastIncreaseDateTime') }})
    number_of_decreases_today: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfDecreasesToday') }})
    read_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadCapacityUnits') }})
    write_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WriteCapacityUnits') }})
    
