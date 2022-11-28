from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateExportJobResponse:
    export_job_response: ExportJobResponse = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExportJobResponse') }})
    
