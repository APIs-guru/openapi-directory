from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportMetadatas:
    r"""ReportMetadatas
    This type defines the metadata used by the all report types.
    """
    
    report_metadata: Optional[List[ReportMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportMetadata') }})
    
