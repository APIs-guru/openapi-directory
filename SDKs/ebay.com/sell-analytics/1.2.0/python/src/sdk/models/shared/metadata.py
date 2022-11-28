from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Metadata:
    r"""Metadata
    Type the defines the metadata information of the report. This includes the headers and the individual metadata records.
    """
    
    metadata_header: Optional[MetadataHeader] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataHeader') }})
    metadata_records: Optional[List[MetadataRecord]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataRecords') }})
    
