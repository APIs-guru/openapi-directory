from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import importjobsresponse


@dataclass_json
@dataclass
class GetImportJobsResponse:
    import_jobs_response: importjobsresponse.ImportJobsResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportJobsResponse' }})
    
