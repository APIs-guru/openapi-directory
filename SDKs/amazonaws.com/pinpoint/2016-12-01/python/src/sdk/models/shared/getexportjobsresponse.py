from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetExportJobsResponse:
    export_jobs_response: ExportJobsResponse = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExportJobsResponse') }})
    
