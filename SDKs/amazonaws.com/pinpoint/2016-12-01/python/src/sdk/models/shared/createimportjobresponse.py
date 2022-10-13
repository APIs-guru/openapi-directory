from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import importjobresponse


@dataclass_json
@dataclass
class CreateImportJobResponse:
    import_job_response: importjobresponse.ImportJobResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportJobResponse' }})
    
