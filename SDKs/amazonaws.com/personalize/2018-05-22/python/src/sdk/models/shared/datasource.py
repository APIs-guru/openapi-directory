from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DataSource:
    r"""DataSource
    Describes the data source that contains the data to upload to a dataset.
    """
    
    data_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataLocation') }})
    
