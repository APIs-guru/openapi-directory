from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DataSource:
    r"""DataSource
    Describes an app's data source.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
