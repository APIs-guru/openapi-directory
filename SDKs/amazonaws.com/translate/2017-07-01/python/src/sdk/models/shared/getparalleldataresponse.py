from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import paralleldatadatalocation
from . import paralleldatadatalocation
from . import paralleldatadatalocation
from . import paralleldataproperties


@dataclass_json
@dataclass
class GetParallelDataResponse:
    auxiliary_data_location: Optional[paralleldatadatalocation.ParallelDataDataLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuxiliaryDataLocation' }})
    data_location: Optional[paralleldatadatalocation.ParallelDataDataLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataLocation' }})
    latest_update_attempt_auxiliary_data_location: Optional[paralleldatadatalocation.ParallelDataDataLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestUpdateAttemptAuxiliaryDataLocation' }})
    parallel_data_properties: Optional[paralleldataproperties.ParallelDataProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParallelDataProperties' }})
    
