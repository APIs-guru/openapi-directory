from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import exportjobresponse


@dataclass_json
@dataclass
class GetExportJobResponse:
    export_job_response: exportjobresponse.ExportJobResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExportJobResponse' }})
    
