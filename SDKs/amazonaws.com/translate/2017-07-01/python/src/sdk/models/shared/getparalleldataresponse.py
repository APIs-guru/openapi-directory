from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetParallelDataResponse:
    auxiliary_data_location: Optional[ParallelDataDataLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuxiliaryDataLocation') }})
    data_location: Optional[ParallelDataDataLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataLocation') }})
    latest_update_attempt_auxiliary_data_location: Optional[ParallelDataDataLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestUpdateAttemptAuxiliaryDataLocation') }})
    parallel_data_properties: Optional[ParallelDataProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParallelDataProperties') }})
    
