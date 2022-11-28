from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetImportJobResponse:
    import_job_response: ImportJobResponse = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportJobResponse') }})
    
