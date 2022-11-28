from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StartSupportDataExportResult:
    r"""StartSupportDataExportResult
    Container for the result of the StartSupportDataExport operation.
    """
    
    data_set_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSetRequestId') }})
    
