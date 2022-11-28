from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MetadataRecord:
    r"""MetadataRecord
    A complex type that defines the data records returned in the report.
    """
    
    metadata_values: Optional[List[Value]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataValues') }})
    value: Optional[Value] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
